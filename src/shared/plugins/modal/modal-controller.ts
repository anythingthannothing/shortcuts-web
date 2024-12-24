import { ComponentType } from 'react';

interface ModalInfo {
  key: string;
  Component: ComponentType<any>;
  props: unknown;
  resolve: (value: any) => void;
  reject: (value?: any) => void;
}

export default class ModalController {
  private flagState;
  private modalInfos: ModalInfo[] = [];

  constructor(flagState: any) {
    this.flagState = flagState;
  }

  private flush() {
    const [_, setFlag] = this.flagState;
    setFlag((prev: number) => prev + 1);
  }

  get top() {
    return this.modalInfos[this.modalInfos.length - 1];
  }

  private handlePromise(key: string, resolver: any, value: any) {
    resolver(value);
    this.modalInfos = this.modalInfos.filter(({ key: _key }) => key !== key);
    this.flush();
  }

  clear() {
    while (this.modalInfos.length > 0) {
      this.pop();
      this.flush();
    }
  }

  pop(result?: unknown) {
    this.top?.resolve(result);
  }

  async push(key: string, Component: ComponentType<any>, props: any) {
    return await new Promise((resolve, reject) => {
      this.modalInfos.push({
        key,
        Component,
        props,
        resolve: (value: any) => this.handlePromise(key, resolve, value),
        reject: (reason) => this.handlePromise(key, reject, reason),
      });
      this.flush();
    });
  }
}
