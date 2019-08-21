import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import styles from './styles';
import AppLogo from './components/appLogo'
import Button from './components/button'
import SocialButton from './components/socialButton'
import TextInput from './components/textInput'
import {checkLogin} from './services/login'
import { Actions } from 'react-native-router-flux';

var DeviceInfo = require('react-native-device-info');
import RNCamera from 'react-native-camera'
function _login(username,password){
    // checkLogin(username,password)
    // .then((response)=>console.log('Login Response',response))
    Actions.drawer()
}

const Login = () => {
    //console.log("Device Model", DeviceInfo.getModel());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ScrollView keyboardShouldPersistTaps contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} >
                <View style={styles.headerContainer}>
                    <AppLogo />
                    <Text style={styles.headerTitle}>Login into Your Account</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <TextInput title="Email ID" onChangeText={(text) => setEmail(text)} value={email} />
                    <TextInput title="Password" secure={true} onChangeText={(text) => setPassword(text)} value={password} />
                    <View style={styles.forgotPasswordContainer}>
                        <Text>Forgot Password ?</Text>
                    </View>
                    <View>
                        <Button onPress={()=>_login(email,password)} title="LOGIN" />
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>Or login with</Text>
                    </View>
                    <View style={styles.socialButtonContainer}>
                        <SocialButton icon="facebook" iconType="MaterialCommunityIcons" />
                        <SocialButton icon="twitter" iconType="MaterialCommunityIcons" />
                        <SocialButton icon="youtube" iconType="MaterialCommunityIcons" />
                        <SocialButton icon="linkedin" iconType="MaterialCommunityIcons" />
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>Don't have an account?</Text>
                    </View>
                    <View>
                        <Button title="REGISTER NOW" style={{ opacity: 0.6 }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Login;