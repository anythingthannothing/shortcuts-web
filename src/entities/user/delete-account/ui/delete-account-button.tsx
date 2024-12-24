import React from 'react';

import { useDeleteAccount } from '@/entities/user/delete-account/model/use-delete-account';
import { ConfirmModal } from '@/shared/components/form/confirm-modal';
import { Button } from '@/shared/components/ui/button';
import { useModal } from '@/shared/plugins/modal/use-modal';

export const DeleteAccountButton = () => {
  const modal = useModal();
  const { mutate, isPending } = useDeleteAccount();

  const handleClick = async () => {
    const confirm = await modal.push('delete-account', ConfirmModal, {
      title: 'Are you sure you want to leave?',
      content: `We hope to see you again soon, but if you're really sure about leaving, let us know!`,
      warning:
        "📢 It can't be undone, and all your data will be erased. Make sure you're ready!",
    });

    if (!confirm) {
      return;
    }

    mutate();
  };

  return (
    <Button
      type="button"
      className={'inline-block'}
      onClick={handleClick}
      variant={'destructive'}
    >
      Delete Account
    </Button>
  );
};
