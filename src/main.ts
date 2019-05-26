import * as fs from 'fs';
import * as path from 'path';
import {packages} from './packages';

interface PackageJson {
  dependencies?: Record<string, string>;
}

async function readFileAsync(path: string): Promise<string> {
  return new Promise<string>((res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
}

export async function scan(json?: PackageJson): Promise<Set<string>> {
  if (!json) {
    try {
      const pkg = await readFileAsync(path.resolve(__dirname, '../package.json'));
      json = JSON.parse(pkg);
    } catch (err) {
      throw new Error('Could not read package.json or file was missing.');
    }
  }

  if (!json || typeof json !== 'object') {
    throw new Error('JSON was of an unexpected format and could not be read.');
  }

  const deps = new Set();

  if (json.dependencies) {
    for (const key in json.dependencies) {
      if (json.dependencies.hasOwnProperty(key)) {
        deps.add(key);
      }
    }
  }

  return new Set([...deps].filter((dep) => packages.has(dep)));
}
