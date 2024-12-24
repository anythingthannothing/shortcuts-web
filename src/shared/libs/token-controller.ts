'use client';

export class TokenController {
  constructor(private readonly storage: Storage) {}

  get accessToken(): string | null {
    return this.storage.getItem('accessToken');
  }

  get refreshToken(): string | null {
    return this.storage.getItem('refreshToken');
  }

  get expiresAt(): number | null {
    const expiresAt = this.storage.getItem('expiresAt');

    if (!expiresAt) {
      return null;
    }
    return +expiresAt;
  }

  setAccessToken = (token: string) =>
    this.storage.setItem('accessToken', token);

  setRefreshToken = (token: string) =>
    this.storage.setItem('refreshToken', token);

  setExpiresAt = (expiresAt: number) =>
    this.storage.setItem('expiresAt', expiresAt.toString());

  clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiresAt');
  };
}

class MockStorage implements Storage {
  [name: string]: any;
  length: number = 0;
  clear(): void {
    throw new Error('Method not implemented.');
  }
  getItem(key: string): string | null {
    throw new Error('Method not implemented.');
  }
  key(index: number): string | null {
    throw new Error('Method not implemented.');
  }
  removeItem(key: string): void {
    throw new Error('Method not implemented.');
  }
  setItem(key: string, value: string): void {
    throw new Error('Method not implemented.');
  }
}
