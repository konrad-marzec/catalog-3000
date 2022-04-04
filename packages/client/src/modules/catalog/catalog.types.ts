export enum Kind {
  FILE = 'file',
  DIRECTORY = 'dir',
}

export interface FileSystemNode {
  type: Kind;
  name: string;
  sizeKb: number;
  items?: FileSystemNode[];
}
