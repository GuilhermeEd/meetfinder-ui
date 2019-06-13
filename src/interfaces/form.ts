declare global {
  interface IFieldDecorator {
    (id: string, initialValue?: any): (node: React.ReactNode) => React.ReactNode;
  }

  interface IFieldValidator {
    (
      rule: { [key: string]: { [key: string]: any } }[],
      value: any,
      callback: (error?: string) => any,
    ): void;
  }

  interface IOnSubmit {
    (values: any): void;
  }
}

export {};
