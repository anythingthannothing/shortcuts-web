'use client';

import { useContext } from 'react';

import ModalContext from './modal-context';

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Modal provider must be provided');
  return context;
};
