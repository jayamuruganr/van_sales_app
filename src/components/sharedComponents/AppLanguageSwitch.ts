import React from 'react';
import { Image, TouchableHighlight, StyleSheet, I18nManager, } from 'react-native';

import { useTranslation } from 'react-i18next';

import { images } from '../constants';


function LanguageSwitch({ style }) {
  const { i18n } = useTranslation();

  const RtlChange = () => {
    i18n.changeLanguage(i18n.language == 'ar' ? 'en' : 'ar').then(
      () => {
        I18nManager.allowRTL(i18n.language == 'ar');
        I18nManager.forceRTL(i18n.language == 'ar');
        setTimeout(() => {
          RNRestart.Restart();
        }, 100);
      }
    )
  }

  return (
    <TouchableHighlight underlayColor={'#5AAED9'} style={[styles.transOtr, style]} onPress={RtlChange}>
      <Image
        style={[styles.translate]}
        source={i18n.language == 'en' ? images.arabic : images.english}
      />
    </TouchableHighlight>
  );
}


const styles = StyleSheet.create({
  transOtr: {
    position: 'absolute',
    left: -10,
    bottom: 5,
    backgroundColor: '#5AAED9',
    zIndex: 999,
    height: 50,
    width: 70,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },

  translate: {
    height: 35,
    width: 50,
    borderRadius: 7,
    left: 9,
    top: 7,
    resizeMode: 'contain'
  },


})
export default LanguageSwitch;