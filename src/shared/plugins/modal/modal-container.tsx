'use client';

import './modal.scss';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useOutsideClick } from '@/shared/hooks/use-outside-click';
import { useModal } from '@/shared/plugins/modal/use-modal';

const MODAL_ID = 'modal-container';

function ModalContainer() {
  const modal = useModal();
  const topComponentInfo = modal.top;
  const ref = useOutsideClick(modal.pop.bind(modal));

  useEffect(() => {
    if (document.getElementById(MODAL_ID)) return;
    const modalDOM = document.createElement('div');
    modalDOM.id = MODAL_ID;
    document.body.append(modalDOM);
  }, []);

  if (!topComponentInfo) {
    return <></>;
  }

  return ReactDOM.createPortal(
    <div className={'modal'}>
      <div
        className={`modal-content rounded-md border bg-popover p-8 text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`}
        ref={ref}
      >
        <topComponentInfo.Component
          resolve={topComponentInfo.resolve}
          reject={topComponentInfo.reject}
          {...(topComponentInfo?.props ?? {})}
        />
      </div>
    </div>,
    window.document.getElementById(MODAL_ID)!,
  );
}

export default ModalContainer;
