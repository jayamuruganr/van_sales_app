import * as React from 'react';
import { Button } from 'react-native-paper';
import { COLORS, SIZES } from '../../constants';
import { StyleSheet , Text,TextStyle,ViewStyle,ImageStyle} from  'react-native'
import { t, use } from 'i18next';
import { useTranslation } from 'react-i18next';
interface props{
    headerTitle:string,
    styleProp?:TextStyle
}

const AppHeaderTitle = ({headerTitle,styleProp}:props) =>{
     const {t} = useTranslation()
return (
<>

<Text style={styles.CommonHeader}> {headerTitle} </Text>
</>
)
};

export default AppHeaderTitle;

type Style = {
    CommonHeader: TextStyle;
};


const styles = StyleSheet.create<Style>({
    CommonHeader: {
       fontSize:SIZES.sz_24_font,
       color:COLORS.TitleTextColor,
       fontWeight:'bold',
       marginTop:15,
       paddingHorizontal:15,
       marginBottom:15,
    }
})