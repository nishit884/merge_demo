import React from 'react'
import {View,Text} from 'react-native'
import {Icon} from 'native-base'
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux'
import Login from './login'
import Home from './home'
import Profile from './profile'
import Sidebar from './components/drawerContent'

const Tab = ({title,focused}) => {
    return(
    <View>
        <Text style={{fontSize:18,color:focused?'white' : '#7b67f0'}}>{title}</Text>
    </View>
)}

const App = () => (
    <Router>
        <Stack key="root" >
            <Scene hideNavBar key="login" component={Login} title="Login" initial />
            <Drawer
              //hideNavBar
              key="drawer"
              onExit={() => {
                console.log('Drawer closed');
              }}
              onEnter={() => {
                console.log('Drawer opened');
              }}
              contentComponent={(props) => <Sidebar {...props}/>}
              //drawerIcon={<Icon name="menu" />}
              drawerImage={<Icon name="menu" />}
              drawerWidth={300}
            >
                <Scene key="home" showLabel={false} labelStyle={{fontSize:18}} tabs activeBackgroundColor='#7b67f0' activeTintColor='white'  >
                    <Scene key='tab1' title='Home' component={Home} icon={Tab} hideNavBar initial />
                    <Scene key='tab2' title='Profile' component={Profile} icon={Tab} hideNavBar />
                </Scene>
            </Drawer>

        </Stack>
    </Router>
);

export default App