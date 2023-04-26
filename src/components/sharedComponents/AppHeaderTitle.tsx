import * as React from 'react';
import { Button } from 'react-native-paper';
import { COLORS, SIZES } from '../../constants';
import { StyleSheet , Text} from  'react-native'
import { t } from 'i18next';

interface props{
    headerTitle:string,
    style?:object
}

const AppHeaderTitle = ({headerTitle,style}:props) => (
    
    <Text style={{color:'black' , fontSize:20}}> {headerTitle} </Text>
);

export default AppHeaderTitle;

const styles = StyleSheet.create({
    CommonHeader: {
       fontSize:SIZES.sz_24_font,
       color:COLORS.TitleTextColor,
       fontWeight:SIZES.bold_font,
       marginTop:15,
       paddingHorizontal:15,
       marginBottom:15,
    }
})