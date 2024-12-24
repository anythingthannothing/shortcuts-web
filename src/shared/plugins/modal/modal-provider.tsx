'use client';

import React, { useState } from 'react';

import ModalContext from '@/shared/plugins/modal/modal-context';

import ModalContainer from './modal-container';
import ModalController from './modal-controller';

interface Props {
  children: React.ReactNode;
}

export function ModalProvider({ children }: Props) {
  const flagState = useState(1);
  const [modalController] = useState(() => new ModalController(flagState));

  return (
    <ModalContext.Provider value={modalController}>
      <>{children}</>
      <ModalContainer />
    </ModalContext.Provider>
  );
}
