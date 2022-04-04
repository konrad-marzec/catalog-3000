import fs from 'fs';
import { basename, resolve } from 'path';

enum Kind {
  FILE = 'file',
  DIRECTORY = 'dir',
}

interface FileSystemNode {
  type: Kind;
  name: string;
  sizeKb: number;
  items?: FileSystemNode[];
}

function getBasePath(path: string): string {
  const resolvedPath = resolve(__dirname, '../../../../catalog', `./${path}`);

  if (resolvedPath.startsWith(process.env.ROOT_PATH)) {
    return resolvedPath;
  }

  return null;
}

function processPath(path: string, depth = 1): FileSystemNode {
  const stat = fs.lstatSync(path);

  if (stat.isFile()) {
    return {
      type: Kind.FILE,
      sizeKb: stat.size,
      name: basename(path),
    };
  }

  let list: string[] = [];

  if (depth) {
    list = fs.readdirSync(path);
  }

  return {
    type: Kind.DIRECTORY,
    sizeKb: stat.size,
    name: basename(path),
    items: list.map((item) => processPath(`${path}/${item}`, depth - 1)),
  };
}

export function read(path: string): FileSystemNode | null {
  const basePath = getBasePath(path);

  if (!basePath) {
    return null;
  }

  try {
    return processPath(basePath);
  } catch {
    return null;
  }
}
