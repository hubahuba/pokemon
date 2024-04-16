import {LocalStorageProps} from '@/definitions/adapters/local-storage';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV({
  id: 'pokemon-data',
  encryptionKey: 'this-is-secret',
});

const LocalStorage: LocalStorageProps = {
  getItem: storage.getString.bind(storage),
  setItem: storage.set.bind(storage),
  removeItem: storage.delete.bind(storage),
  clear: storage.clearAll.bind(storage),
};

export default LocalStorage;
