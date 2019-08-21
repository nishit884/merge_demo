import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    headerContainer: {
        alignItems: 'center',
        height: Dimensions.get('window').height / 3.5,
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '800'
    },
    bodyContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 20
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        margin: 5
    },
    subtitleContainer: {
        alignItems: 'center',
        margin: 10
    },
    subtitleText: {
        fontSize: 18,
        fontWeight: '800'
    },
    socialButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 10
    },
    // Social Button 
    socialButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#5648a5'
    },
    icon: {
        color: 'white',
        fontSize: 22
    },
    // Button
    button: {
        backgroundColor: '#7b67f0',
        padding: 8,
        alignItems: 'center',
        margin: 5,
        borderRadius: 25
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    // Text Input
    textInputContainer: {
        margin: 5
    },
    textInputTitle: {
        fontSize: 18
    },
    textInput: {
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: 5,
        height: 40
    },
    // App Logo
    logo: {
        height: 50,
        width: 150
    }
})

export default styles;