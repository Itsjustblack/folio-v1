declare module 'flubber' {
  export function interpolate(from: string, to: string, options?: { maxSegmentLength?: number }): (t: number) => string;
  export function toCircle(from: string, cx: number, cy: number, r: number, options?: object): (t: number) => string;
  export function fromCircle(cx: number, cy: number, r: number, to: string, options?: object): (t: number) => string;
}
