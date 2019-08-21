import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Profile = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Text>Profile</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
})

export default Profile;
