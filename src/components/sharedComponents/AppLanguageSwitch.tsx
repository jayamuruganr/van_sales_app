import React from 'react';
import { Image, TouchableHighlight, StyleSheet, I18nManager, Button, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart'
import images from '../../constants/images';
import { COLORS } from '../../constants';


interface props{
    style?:object
}

const AppLanguageSwitch = ({style}:props) => {

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
      
      <TouchableOpacity style={[styles.transOtr, style]} onPress={RtlChange} >
             <Image
        style={[styles.translate]}
        source={i18n.language == 'en' ? images.arabic : images.english}
      />
      </TouchableOpacity>
      );
}
    
const styles = StyleSheet.create({
  transOtr: {
    position: 'absolute',
    left: -10,
    bottom: 5,
    backgroundColor:COLORS.White,
    zIndex: 99999,
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

export default AppLanguageSwitch;

