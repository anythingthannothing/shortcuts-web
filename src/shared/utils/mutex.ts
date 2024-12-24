class Mutex {
  private promise: Promise<void> | null = null;
  private resolve: VoidFunction | null = null;

  async lock() {
    if (!this.promise) {
      this.promise = new Promise<void>((resolve) => {
        this.resolve = resolve;
      });
      return Promise.resolve();
    }
    return this.promise;
  }

  unlock() {
    if (this.resolve) {
      this.resolve();
      this.promise = null;
      this.resolve = null;
    }
  }

  get isLocked() {
    return this.promise !== null;
  }

  async runExclusive<T>(callback: () => Promise<T>) {
    await this.lock();
    try {
      return await callback();
    } finally {
      this.unlock();
    }
  }
}

export default Mutex;
