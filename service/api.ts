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

interface Time {
  from: string;
  end: string;
}

interface Image {
  width: number;
  height: number;
  alt: string;
  src: string;
}

interface ExternalSite {
  href: string;
  name: string;
}

export interface Work {
  image: Image;
  time: Time;
  description: string;
  externalSite: ExternalSite;
}
export interface WorkItem {
  works: Work[];
}

export async function getWorks(): Promise<WorkItem> {
  const filePath = path.join(process.cwd(), 'data', 'works.json');
  return promises
    .readFile(filePath, 'utf-8')
    .then<WorkItem>(JSON.parse)
    .then((work) => work);
}
