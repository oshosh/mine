import { promises } from 'fs';
import path from 'path';

export interface KeywordItem {
  contents: string[];
}
export async function getKeyword(): Promise<KeywordItem> {
  const filePath = path.join(process.cwd(), 'data', 'keyword.json');
  return promises
    .readFile(filePath, 'utf-8')
    .then<KeywordItem>(JSON.parse)
    .then((keyword) => keyword);
}
