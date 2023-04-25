import React, { useEffect, useState, useMemo } from 'react';
import { COLORS, SIZES } from '../../constants';
import { ErrorMessage, useFormikContext } from "formik";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View, Button, Image, Modal, TouchableOpacity, Text
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { TextInput } from 'react-native-paper';
interface Props {
    name?: string;
    placeholder?: string;
    width?: number;
}

function AppMultiCalendarView({ name, placeholder, width }: Props) {
    const initDate = '2022-12-01';
    const [selected, setSelected] = useState('');
    const [flag, setflage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const {
        errors,
        setFieldTouched,
        setFieldValue,
        handleChange,
        handleBlur,
        touched,
        values
    } = useFormikContext();

    useEffect(() => {
        setFieldValue(name!, selected)
    }, [flag, selected]);
    const marked = useMemo(() => ({
        [selected]: {
            selected: true,
            selectedColor: '#222222',
            selectedTextColor: 'yellow',
        }
    }), [selected]);

    return (


        <View>
            {/* onPress={() => setModalVisible(true)} */}
            {/* <TouchableOpacity  onPress={() => setModalVisible(true)}> */}
            {/* <TextInput showSoftInputOnFocus={false}  onPressIn={() => setModalVisible(true)} caretHidden={true} value={selected} style={[styles.inuptbox]} placeholder='Calendar' placeholderTextColor="#202020"   /> */}
            {/* </TouchableOpacity> */}
            <TextInput
                mode="outlined"
                showSoftInputOnFocus={false} onPressIn={() => setModalVisible(true)} caretHidden={true} value={selected}
                label={placeholder}
                placeholder={placeholder}
            />
            {errors &&
                <Text style={{ color: 'red' }} ><ErrorMessage name={name!}></ErrorMessage></Text>
            }
            <Modal visible={modalVisible} transparent={true} animationType="fade">
                <View style={styles.overlay}>
                    <Calendar
                        initialDate={initDate}
                        markedDates={{
                            [selected]: {selected: true,selectedColor:'red',
                            disableTouchEvent: true,
                            selectedTextColor: 'orange'
                          },
                        }}
                        onDayLongPress={(day) => {
                            setSelected(day.dateString);
                            setModalVisible(false)
                        }} />
                </View>
            </Modal>
            {/* 
             <TouchableOpacity style={{backgroundColor:'red',height:60}} onPress={showcalender}  >
            <Image
                style={{ width: 21, height: 24, marginHorizontal: 5, top: -10}}
                source={require('../../assets/images/DatePicker_Icon.png')} 
            />
        </TouchableOpacity>


            {flag && <Calendar
                initialDate={initDate}
                markedDates={marked}
                onDayPress={(day) => {
                    setSelected(day.dateString);
                    setflage(false);
                    console.log(day.dateString);
                }}
                onDayLongPress={(day) => console.log('onDayLongPress', day)}
                onMonthChange={(date) => console.log('onMonthChange', date)}
                onPressArrowLeft={(goToPreviousMonth) => {
                    console.log('onPressArrowLeft'); goToPreviousMonth();
                }}
                onPressArrowRight={(goToNextMonth) => {
                    console.log('onPressArrowRight'); goToNextMonth();
                }}
            />
            }*/}

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
    }, inuptbox: {
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

export default AppMultiCalendarView;