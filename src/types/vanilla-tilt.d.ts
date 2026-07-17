declare module 'vanilla-tilt' {
  export interface VanillaTiltOptions {
    max?: number;
    speed?: number;
    glare?: boolean;
    "max-glare"?: number;
    scale?: number;
    [key: string]: any;
  }
  export default class VanillaTilt {
    static init(element: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>, options?: VanillaTiltOptions): void;
  }
}
