import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import { RadioButton } from 'react-native-paper';
import { ErrorMessage, useFormikContext } from "formik";
interface Props {
    name?: string;
}
const AppRadioButton = ({ name }: Props) => {

    const {
        errors,
        setFieldTouched,
        setFieldValue,
        handleChange,
        handleBlur,
        touched,
        values
    } = useFormikContext();

    const [value, setValue] = React.useState('first');

    useEffect(() => {
        setFieldValue(name!, value)
    }, [value]);

    return (
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <RadioButton.Item label="First item" value="first" />
                    <RadioButton.Item label="Second item" value="second" />
                </View>
            </RadioButton.Group>
        </View>
    );
};

export default AppRadioButton;