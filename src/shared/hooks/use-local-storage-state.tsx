'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useLocalStorageState(
  initialState: boolean,
  key: string,
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(initialState);

  useEffect(
    function () {
      LocalStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}

class LocalStorage {
  constructor() {}

  static setItem(key: string, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  // getItem 은 return 을 넣어줘야함! setItem, removeItem이랑 다르게 값을 보여주는녀석!
  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    // window객체 localStorage, sessionStorage는 값이 없을때 null
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}

export default LocalStorage;
