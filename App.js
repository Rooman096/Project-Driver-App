import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerTop } from './src/screen/DrawerTop';
import Login from './src/screen/Login';
import Firstscreen from './src/screen/Firstscreen';
import ForgetPassword from './src/screen/ForgetPassword';
import Helpandsupport from './src/screen/HelpandSupport';
import HomeScreen from './src/screen/HomeScreen';
import Wallet from './src/screen/Wallet';
import Home from './Home';
import Main from './src/navigation/Main';
import RideHistory from './src/screen/RideHistory';
import EditProfile from './src/screen/EditProfile';
import Icon from 'react-native-vector-icons/MaterialIcons';
const drawer=createDrawerNavigator();

const Stack = createStackNavigator();
/*
function createDrawer({navigation}) {
    return(

  
      <drawer.Navigator initialRouteName="HomeScreen" drawerContent={props=> <DrawerTop{...props}/>}>
            <drawer.Screen name="HomeScreen" component={Home}  />
            <drawer.Screen name ="Edit Profile" component={EditProfile}/>
            <drawer.Screen name ="Wallet" component={Wallet}/>
            <drawer.Screen name="Ride History" component={RideHistory}/>
            <drawer.Screen name ="Help" component={Helpandsupport}/>
           
        </drawer.Navigator>
    );
        
 
};*/
const App =() => {
    return(
    
        <NavigationContainer>
        <Stack.Navigator headerMode="none"
        > 
          <Stack.Screen name="Wellcome" component={Firstscreen} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name ="Forget Password" component={ForgetPassword}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    

    );
}


export default App;
