
export const FONT_FAMILY = {
    latoRegular: 'Outfit-Regular',
    montserrat: 'Montserrat-Regular'
  }
export const FONT_WEIGHT = {
  /* the type assertion 
  address typescript font weight issue
  */
  'small' : '400' as "300",
  'medium' : '500' as "400",
  'big' : '600' as "500",
  'bigger' : '700' as "600",
  'large' : '800' as "700",
  'larger' : '900' as "800",
  };

  export type FontFamily = keyof typeof FONT_FAMILY;