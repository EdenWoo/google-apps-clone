// Media query breakpoints
export const SCREEN_XS_MIN = 480;
export const SCREEN_SM_MIN = 600;
export const SCREEN_MD_MIN = 960;
export const SCREEN_LG_MIN = 1280;
export const SCREEN_XL_MIN = 1920;

export const SCREEN_XXS_MAX = SCREEN_XS_MIN - 1;
export const SCREEN_XS_MAX = SCREEN_SM_MIN - 1;
export const SCREEN_SM_MAX = SCREEN_MD_MIN - 1;
export const SCREEN_MD_MAX = SCREEN_LG_MIN - 1;
export const SCREEN_LG_MAX = SCREEN_XL_MIN - 1;

export type BreakpointsMin =
  | typeof SCREEN_XS_MIN
  | typeof SCREEN_SM_MIN
  | typeof SCREEN_MD_MIN
  | typeof SCREEN_LG_MIN
  | typeof SCREEN_XL_MIN;
