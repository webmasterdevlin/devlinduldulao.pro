// globals.d.ts
declare global {
    interface Window {
      adsbygoogle: any[];
    }
  }
  declare var adsbygoogle: { [key: string]: unknown }[];
  export {};
  