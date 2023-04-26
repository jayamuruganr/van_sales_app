import { Dimensions, I18nManager } from 'react-native';
const { width, height } = Dimensions.get('window');
// console.log('I18nManager',I18nManager)
export const COLORS = {
  primary: '#5baeda',
  secondary: '#005e94',
  PrimaryButton:'#456DFE',
  White:'#fff',
  black:'#000',
  TitleTextColor:'#343031',
  paracolors:"#B3B3B3",
  placeholder: '#5AAED9',
  commonText:"#8A8787"
};

export const SIZES = {
  // margin
  margin_8: 8,
  margin_12: 12,
  margin_20: 20,
  margin_24: 24,
  form_margin: 28,

  // padding
  padding_8: 8,
  padding_12: 12,
  padding_20: 20,
  padding_24: 24,

  // font
  sz_12_font: 12,
  sz_13_font: 13,
  sz_14_font: 14,
  sz_15_font: 15,
  sz_16_font: 16,
  sz_17_font: 17,
  sz_18_font: 18,
  sz_20_font: 20,
  sz_22_font: 22,
  sz_24_font: 24,
  sz_26_font: 26,
  sz_28_font: 28,
  sz_30_font: 30,

  // font weight
  regular_font: '400',
  medium_font: '500',
  semi_bold_font: '600',
  bold_font: '700',

  // app dimensions
  width,
  height,
};


const appTheme = { COLORS, SIZES };
export default appTheme;