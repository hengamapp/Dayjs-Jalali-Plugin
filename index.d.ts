import { PluginFunc, Dayjs } from 'dayjs';

declare const plugin: PluginFunc;
export = plugin;

type calendarType = 'jalali' | 'gregory';

declare module 'dayjs' {
  export function calendar(calendarType: calendarType): Dayjs;

  export function isJalali(): boolean;

  export interface FormatObject {
    jalali?: boolean;
  }

  interface Dayjs {
    calendar(type: 'jalali' | 'georgian'): Dayjs;
  }
}
