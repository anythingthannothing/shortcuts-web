import { IconType } from 'react-icons';
import { BsFiletypeExe } from 'react-icons/bs';
import { FaPalette } from 'react-icons/fa';
import { FaCode, FaComputer } from 'react-icons/fa6';
import { IoLogoGameControllerB, IoMdBrowsers } from 'react-icons/io';
import { RiRobot2Fill } from 'react-icons/ri';

interface CategoryInfo {
  name: string;
  icon: IconType;
}

export const categoryInfos: Record<string, CategoryInfo> = {
  os: {
    name: 'OS',
    icon: FaComputer,
  },
  browser: {
    name: 'Browser',
    icon: IoMdBrowsers,
  },
  program: {
    name: 'Program',
    icon: BsFiletypeExe,
  },
  ai: {
    name: 'AI',
    icon: RiRobot2Fill,
  },
  ide: {
    name: 'IDE',
    icon: FaCode,
  },
  design: {
    name: 'Design',
    icon: FaPalette,
  },
  game: {
    name: 'Game',
    icon: IoLogoGameControllerB,
  },
} as const;
