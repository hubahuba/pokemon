export interface LocalStorageProps {
  getItem(key: string): string | undefined;
  setItem(key: string, value: string | number | boolean | Uint8Array): void;
  removeItem(key: string): void;
  clear(): void;
}
