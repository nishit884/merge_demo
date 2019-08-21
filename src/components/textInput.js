import React from 'react';
import {
    TextInput,
    View,
    Text
} from 'react-native';
import styles from '../styles'
const Input = (props) => {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>{props.title}</Text>
            <TextInput secureTextEntry={props.secure} onChangeText={props.onChangeText} style={styles.textInput} />
        </View>
    );
};
export default Input;
