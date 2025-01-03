import { Button } from '@/shared/components/ui/button';
import { useModal } from '@/shared/plugins/modal/use-modal';

interface Props {
  title: string;
  content: string;
}

function ConfirmModal({ title, content }: Props) {
  const modal = useModal();

  return (
    <div className={'space-y-8'}>
      <h3 className="text-xl">{title}</h3>
      <p>{content}</p>
      <div className={'flex w-full justify-evenly'}>
        <Button
          type={'button'}
          variant={'destructive'}
          onClick={() => {
            modal.pop(true);
          }}
        >
          Confirm
        </Button>
        <Button
          type={'button'}
          variant={'default'}
          onClick={() => {
            modal.pop(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default ConfirmModal;
