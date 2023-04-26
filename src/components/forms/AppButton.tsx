import * as React from 'react';
import { Button } from 'react-native-paper';
import { COLORS, SIZES } from '../../constants';
import { StyleSheet } from  'react-native'

interface props{
    title?:string,
    style?:object
}
const AppButton = ({title,style}:props) => (
  <Button  style={styles.CommonBtn}
   labelStyle={{fontSize:SIZES.sz_16_font,color:COLORS.White}} 
   mode="contained-tonal" 
   onPress={() => console.log('Pressed')}
   >
{title}
  </Button>
);

export default AppButton;

const styles = StyleSheet.create({
    CommonBtn: {
        backgroundColor:COLORS.PrimaryButton,
        width:"85%",
        alignItems:'center',
        alignSelf:'center',
        borderRadius:5,
        margin:10
    }
})