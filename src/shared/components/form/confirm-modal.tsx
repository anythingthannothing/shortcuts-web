import { Button } from '@/shared/components/ui/button';
import { useModal } from '@/shared/plugins/modal/use-modal';

interface Props {
  title: string;
  content: string;
  warning?: string;
}

export const ConfirmModal = ({ title, content, warning }: Props) => {
  const modal = useModal();

  return (
    <div className={'space-y-6'}>
      <h2 className={'text-xl font-medium'}>{title}</h2>
      <p className={'whitespace-pre-line'}>{content}</p>
      {warning && (
        <p
          className={
            'whitespace-pre-line bg-destructive text-destructive-foreground'
          }
        >
          <strong>{warning}</strong>
        </p>
      )}
      <div className={'flex w-full justify-evenly'}>
        <Button
          variant={'destructive'}
          onClick={() => {
            modal.pop(true);
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            modal.pop(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
