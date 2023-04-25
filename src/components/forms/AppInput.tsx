
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { ErrorMessage, useFormikContext } from "formik";
import { TextInput } from 'react-native-paper';

interface Props {
    name?: string;
    placeholder?: string;
    width?: number;
}
const AppTextFormInput = ({ name, placeholder, width }: Props) => {
    const {
        errors,
        setFieldTouched,
        setFieldValue,
        handleChange,
        handleBlur,
        touched,
        values
    } = useFormikContext();


    return (
        <>
            {/* <Text style={{ color: COLORS.black }}>{name}{'Hii'}</Text>
            <TextInput
                style={[styles.inuptbox]}
                onChangeText={(text) => setFieldValue(name ?? '', text)}
                placeholder={placeholder}
                // onBlur={() => {console.log(values[Props.name]);}
                // }
                placeholderTextColor="#202020"
            /> */}
            <TextInput
                mode="outlined"
                onChangeText={(text) => setFieldValue(name ?? '', text)}
                label={placeholder}
                placeholder={placeholder}
                
            />
            {errors &&
                <Text style={{ color: 'red' }} ><ErrorMessage name={name!}></ErrorMessage></Text>
            }
        </>
    );
};

const styles = StyleSheet.create({
    inuptbox: {
        borderWidth: 1,
        color: COLORS.black,
        borderLeftColor: COLORS.white,
        borderTopColor: COLORS.white,
        paddingHorizontal: 8,
        borderRightColor: COLORS.white,
        borderBottomColor: COLORS.switch,
        backgroundColor: COLORS.white,
        fontSize: SIZES.sz_16_font,
        marginBottom: 15,

    },
});

export default AppTextFormInput;