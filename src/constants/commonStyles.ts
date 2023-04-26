import { COLORS, SIZES } from "./themes";
import { I18nManager } from "react-native";

export const commonStyles = {


    text: {
      color: COLORS.commonText,
      fontSize: SIZES.sz_16_font,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    formField:{
      color: COLORS.TitleTextColor,
      fontSize: SIZES.sz_13_font,
      margin: SIZES.margin_8,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
  

    // Card themes designs 
    
    cardMainTitle:{
      color: COLORS.TitleTextColor,
      fontSize: SIZES.sz_24_font,
      margin: SIZES.margin_8,
      fontWeight: SIZES.bold_font,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },

    cardMainsubTitle:{
      color: COLORS.TitleTextColor,
      fontSize: SIZES.sz_12_font,
      margin: SIZES.margin_8,
      fontWeight: SIZES.bold_font,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    cardtitle: {
      color: COLORS.TitleTextColor,
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
  
    cardnumber:{
      color: COLORS.commonText, //need to change color after theme conform
      fontSize: SIZES.sz_16_font,
      margin: SIZES.margin_8,
      fontWeight: SIZES.regular_font,
      textAlign: I18nManager.isRTL ? 'right' : 'left'
    }
  };
  