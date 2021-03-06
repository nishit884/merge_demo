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
import ImagePicker from 'react-native-image-crop-picker';
import Svg,{
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
import RNSettings from 'react-native-settings'
var DeviceInfo = require('react-native-device-info');
import RNCamera from 'react-native-camera'
function _login(username,password){
    // checkLogin(username,password)
    // .then((response)=>console.log('Login Response',response))
    Actions.drawer()
}
function gal(){
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
}

function openSetting() {

    RNSettings.openSetting(RNSettings.ACTION_LOCATION_SOURCE_SETTINGS).
    then((result) => {
    if (result === RNSettings.ENABLED) {
    console.log('location is enabled')
    }

})
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
                <Svg height={10} width={10} viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
        </Svg>
                <View style={styles.bodyContainer}>
                    <TextInput title="Email ID" onChangeText={(text) => setEmail(text)} value={email} />
                    <TextInput title="Password" secure={true} onChangeText={(text) => setPassword(text)} value={password} />
                    <View style={styles.forgotPasswordContainer}>
                        <Text>Forgot Password ?</Text>
                    </View>
                    <View>
                        <Button onPress={()=>openSetting()} title="LOGIN" />
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
                        <Button onPress={()=>gal()} title="REGISTER NOW" style={{ opacity: 0.6 }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Login;