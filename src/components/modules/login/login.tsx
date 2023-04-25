import React, { useState } from "react";

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import * as Yup from 'yup';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { AppTextFormInput, AppCalendarView, AppDropDown, AppRadioButton, AppCheckBox, AppMultiCalendarView } from "../../forms";


const ValidationSchema = Yup.object().shape({
  userName: Yup.string().required().label('userName'),
  password: Yup.string().required().label('password'),
  date: Yup.string().required().label('date'),
  gender: Yup.string().required().label('gender')


});

export default function Login() {
  return (

    <View>
      <Formik
        initialValues={{
          userName: '',
          password: '',
          date: '',
          gender: '',
          picked: ''
        }}
        onSubmit={(values, actions) => {
          console.log(values, 'values');

        }}
        validationSchema={ValidationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <AppTextFormInput name="userName" placeholder="userName" />
            <AppTextFormInput name="password" placeholder="password" />
            <AppCalendarView name="date" placeholder="date" />
            {/* <AppMultiCalendarView name="date" placeholder="date" /> */}
            <AppDropDown name="gender" placeholder="gender" />
            <AppRadioButton name='picked' />
            <AppCheckBox />
            <Button onPress={handleSubmit} title="Submit"></Button>
          </View>
        )}

      </Formik>

      {/* <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
        /> */}
      {/* <AppTextFormInput name="userName"/> */}
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});