import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Home = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Text>Drawer</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
})

export default Home;
