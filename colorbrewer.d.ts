// colorbrewer.d.ts
declare module 'colorbrewer' {
    export const schemeGroups: {
      sequential: string[];
      singlehue: string[];
      diverging: string[];
      qualitative: string[];
    };
  
    export type ColorScheme = {
      [key: number]: string[];
    };
  
    // Add all the color schemes here
    export const YlGn: ColorScheme;
    export const YlGnBu: ColorScheme;
    export const GnBu: ColorScheme;
    export const BuGn: ColorScheme;
    export const PuBuGn: ColorScheme;
    export const PuBu: ColorScheme;
    export const BuPu: ColorScheme;
    export const RdPu: ColorScheme;
    export const PuRd: ColorScheme;
    export const OrRd: ColorScheme;
    export const YlOrRd: ColorScheme;
    export const YlOrBr: ColorScheme;
    export const Purples: ColorScheme;
    export const Blues: ColorScheme;
    export const Greens: ColorScheme;
    export const Oranges: ColorScheme;
    export const Reds: ColorScheme;
    export const Greys: ColorScheme;
    export const PuOr: ColorScheme;
    export const BrBG: ColorScheme;
    export const PRGn: ColorScheme;
    export const PiYG: ColorScheme;
    export const RdBu: ColorScheme;
    export const RdGy: ColorScheme;
    export const RdYlBu: ColorScheme;
    export const Spectral: ColorScheme;
    export const RdYlGn: ColorScheme;
    export const Accent: ColorScheme;
    export const Dark2: ColorScheme;
    export const Paired: ColorScheme;
    export const Pastel1: ColorScheme;
    export const Pastel2: ColorScheme;
    export const Set1: ColorScheme;
    export const Set2: ColorScheme;
    export const Set3: ColorScheme;
}