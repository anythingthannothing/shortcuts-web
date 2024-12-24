'use client';

import { createContext } from 'react';

import ModalController from '@/shared/plugins/modal/modal-controller';

const ModalContext = createContext<ModalController | null>(null);

export default ModalContext;
