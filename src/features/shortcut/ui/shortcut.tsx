import React from 'react';

import KeyboardKey from '@/entities/shortcut/keyboard/ui/keyboard-key';

interface Props {
  type: 'window' | 'mac';
  shortcutKey: string;
}

function Shortcut({ type, shortcutKey }: Props) {
  if (!shortcutKey) {
    return <span>❌</span>;
  }
  return (
    <div className={'flex gap-2 items-center'}>
      {shortcutKey.split(',').map((shortcut, index) => (
        <KeyboardKey key={index} type={type} keyIndex={shortcut} />
      ))}
    </div>
  );
}

export default Shortcut;
