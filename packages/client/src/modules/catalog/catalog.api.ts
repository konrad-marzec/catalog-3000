import fetch, { handleAuthorization } from '../../utils/fetch';
import { FileSystemNode } from './catalog.types';

export async function loadCatalog(path: string): Promise<FileSystemNode> {
  return fetch(
    `/api/v1/file-browse${path
      .split('/')
      .map((part) => encodeURIComponent(part))
      .join('/')}`,
    {
      method: 'GET',
    },
  )
    .then(handleAuthorization)
    .then(async (response: Response): Promise<FileSystemNode> => response.json());
}
