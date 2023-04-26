import { COLORS, SIZES } from "./themes";
import { I18nManager } from "react-native";

export const commonStyles = {
    text: {
      color: COLORS.commonText,
      fontFamily: 'ProximaNova-Regular',
      fontSize: SIZES.sz_14_font,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    formField:{
      color: COLORS.TitleTextColor,
      fontFamily: 'ProximaNova-Regular',
      fontSize: SIZES.sz_13_font,
      margin: SIZES.margin_8,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
  
    cardtitle: {
      color: COLORS.TitleTextColor,
      fontFamily: 'ProximaNova-Regular',
      fontSize: SIZES.sz_18_font,
      margin: SIZES.margin_8,
      fontWeight: SIZES.bold_font,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
   
    cardText: {
      color: COLORS.commonText,
      fontSize: SIZES.sz_12_font,
      margin: SIZES.margin_8,
      fontWeight: SIZES.regular_font,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
  
  };
  