import React from 'react';
import {
    TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base'
import styles from '../styles'
const SocialButton = (props) => {
    return (
        <TouchableOpacity style={styles.socialButton}>
            <Icon name={props.icon} type={props.iconType} style={styles.icon} />
        </TouchableOpacity>
    );
};
export default SocialButton;
