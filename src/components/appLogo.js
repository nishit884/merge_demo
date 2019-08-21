import React, { Fragment } from 'react';
import {
    Image
} from 'react-native';
import styles from '../styles'
const AppLogo = () => {
    return (
        <Image source={require('../asseets/images/logo.png')} style={styles.logo} />
    );
};
export default AppLogo;
