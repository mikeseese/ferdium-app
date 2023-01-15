import semver from 'semver';
import { ifUndefined } from '../jsUtils';

export interface ExtensionData {
  id: string;
  name: string;
  version: string;
}

export interface IExtension {
  id: string;
  name: string;
  version: string;
}

export default class Extension implements IExtension {
  id = '';

  name = '';

  version = '';

  constructor(data: ExtensionData) {
    if (!data) {
      throw new Error('Extension config not valid');
    }

    if (!semver.valid(data.version)) {
      throw new Error(
        `Version ${data.version} of extension '${data.name}' is not a valid semver version`,
      );
    }

    // from the extension
    this.id = ifUndefined<string>(data.id, this.id);
    this.name = ifUndefined<string>(data.name, this.name);
    this.version = ifUndefined<string>(data.version, this.version);
  }
}
