import { useContext } from 'react';

import { GlobalContext } from '@/contexts';

export const useStore = <T>(key: string): [T, (value: T) => void] => {
  const { store, updateStore } = useContext(GlobalContext);
  return [
    store[key] || null,
    (value: T) => {
      updateStore<T>(key, value);
    },
  ];
};
