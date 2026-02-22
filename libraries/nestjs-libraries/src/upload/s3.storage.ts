import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import 'multer';
import { makeId } from '@gitroom/nestjs-libraries/services/make.is';
import mime from 'mime-types';
import { IUploadProvider } from './upload.interface';

/**
 * S3 storage provider for Postra (AWS S3 or S3-compatible).
 * Env: STORAGE_PROVIDER=s3, S3_BUCKET, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_PUBLIC_URL (base URL for objects, e.g. https://cdn.postra.pl)
 */
export class S3Storage implements IUploadProvider {
  private _client: S3Client;
  private _bucket: string;
  private _publicUrl: string;

  constructor(
    bucket: string,
    region: string,
    publicUrl: string,
    accessKeyId?: string,
    secretAccessKey?: string
  ) {
    this._bucket = bucket;
    this._publicUrl = publicUrl.replace(/\/$/, '');

    this._client = new S3Client({
      region,
      ...(accessKeyId && secretAccessKey
        ? {
            credentials: {
              accessKeyId,
              secretAccessKey,
            },
          }
        : {}),
    });
  }

  async uploadSimple(path: string): Promise<string> {
    const loadImage = await fetch(path);
    const contentType =
      loadImage?.headers?.get('content-type') ||
      loadImage?.headers?.get('Content-Type') ||
      'application/octet-stream';
    const extension = mime.extension(contentType) || 'bin';
    const key = `${makeId(10)}.${extension}`;

    const command = new PutObjectCommand({
      Bucket: this._bucket,
      Key: key,
      Body: Buffer.from(await loadImage.arrayBuffer()),
      ContentType: contentType,
    });
    await this._client.send(command);

    return `${this._publicUrl}/${key}`;
  }

  async uploadFile(file: Express.Multer.File): Promise<any> {
    const extension = mime.extension(file.mimetype) || '';
    const key = `${makeId(10)}.${extension}`;

    const command = new PutObjectCommand({
      Bucket: this._bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });
    await this._client.send(command);

    const path = `${this._publicUrl}/${key}`;
    return {
      filename: key,
      path,
      mimetype: file.mimetype,
      size: file.size,
      buffer: file.buffer,
      originalname: file.originalname,
      fieldname: 'file',
      destination: path,
      encoding: '7bit',
      stream: file.buffer as any,
    };
  }

  async removeFile(filePath: string): Promise<void> {
    const key = this._keyFromPath(filePath);
    if (!key) return;

    const command = new DeleteObjectCommand({
      Bucket: this._bucket,
      Key: key,
    });
    await this._client.send(command);
  }

  private _keyFromPath(filePath: string): string | null {
    try {
      const url = new URL(filePath);
      const pathname = url.pathname.replace(/^\//, '');
      return pathname || null;
    } catch {
      return filePath.replace(/^\//, '').split('/').pop() || null;
    }
  }
}
