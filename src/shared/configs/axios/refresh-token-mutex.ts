import Mutex from '@/shared/utils/mutex';

let refreshTokenMutex: Mutex | null = null;

if (typeof window !== 'undefined') {
  refreshTokenMutex = new Mutex();
}

export default refreshTokenMutex;
