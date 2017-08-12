import { foldersRef } from './firebase';

export const addFolder = folder => {
  foldersRef.push(folder);
};
