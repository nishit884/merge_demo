import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../styles'
const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.style]}>
            <Text style={styles.buttonTitle}>{props.title}</Text>
        </TouchableOpacity>
    );
};
export default Button;
