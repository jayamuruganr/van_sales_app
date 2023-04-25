// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { COLORS, SIZES } from '../../constants';
// import { ErrorMessage, useFormikContext } from "formik";
// import { Checkbox } from 'react-native-paper';

// interface Props {
//     name?: string;
//     text?: string;
//     width?: number;
// }
// const AppCheckBox = ({ name, text, width }: Props) => {
//     const [checkeds, setChecked] = React.useState(false);
//     const {
//         errors,
//         setFieldTouched,
//         setFieldValue,
//         handleChange,
//         handleBlur,
//         touched,
//         values
//     } = useFormikContext();


//     return (
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Text style={{ color: '#000' }}>{text}</Text>
//             <Checkbox
//                 status={checkeds}
//                 onPress={() => { setChecked(!checkeds); }}
//             />
//         </View>
//     );
// };


// export default AppCheckBox;

// import * as React from 'react';
// import { StyleSheet, Text, SafeAreaView } from 'react-native';
// import { Checkbox } from 'react-native-paper';
// const AppCheckBox = () => {
//    const [checked, setChecked] = React.useState(false);
//    return (
//       <SafeAreaView style={styles.container}>
//          <Checkbox
//             status={checked ? 'checked' : 'unchecked'}
//             onPress={() => {
//                setChecked(!checked);
//             }}
//             color={'green'}
//          />
//       <Text>Checkbox</Text>
//       </SafeAreaView>
//    );
// };
// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//    },
// });
// export default AppCheckBox;

import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const AppCheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default AppCheckBox;