import React from 'react';

import {
  macKeyboardKeys,
  windowKeyboardKeys,
} from '@/entities/shortcut/keyboard/model/key-list';

interface Props {
  type: 'window' | 'mac';
  keyIndex: string;
}

function KeyboardKey({ type, keyIndex }: Props) {
  const key =
    type === 'mac' ? macKeyboardKeys[keyIndex] : windowKeyboardKeys[keyIndex];

  if (typeof key === 'string') {
    return (
      <kbd
        className={
          'py-1 px-2 border-2 rounded-md text-ellipsis whitespace-nowrap bg-background group-hover:z-10'
        }
      >
        {key}
      </kbd>
    );
  }

  return <div>{key}</div>;
}

export default KeyboardKey;
