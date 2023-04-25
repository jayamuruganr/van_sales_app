import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { ErrorMessage, useFormikContext } from "formik";
interface Props {
    name?: string;
    placeholder?: string;
    width?: number;
}
function AppDropDown({ name, placeholder, width }: Props) {
    const {
        errors,
        setFieldTouched,
        setFieldValue,
        handleChange,
        handleBlur,
        touched,
        values
    } = useFormikContext();

    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState("");
    const genderList = [
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Others",
            value: "others",
        },
    ];
    useEffect(() => {
        setFieldValue(name!, gender)
    }, [gender]);
    return (
        // <Provider>
        <View>

            <DropDown
                label={"Gender"}
                mode={"outlined"}
                visible={showDropDown}

                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                // onChange={(item) => {}}
                value={gender}
                setValue={setGender}
                list={genderList}
            />
            {errors &&
                <Text style={{ color: 'red' }} ><ErrorMessage name={name!}></ErrorMessage></Text>
            }
        </View>

        // </Provider>
    )
}
const styles = StyleSheet.create({

});
export default AppDropDown;