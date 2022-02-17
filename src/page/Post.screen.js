import * as React from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../auth/Login';
import Register from '../auth/Register.screen';
import Post from '../page/Post.screen';
import Home from '../page/Home';
import Search from '../page/Search';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const AuthStack = createNativeStackNavigator();
const PostScreen = createStackNavigator();
const SearchScreen = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}

function PostStackScreen() {
  return (
    <PostScreen.Navigator>
      <PostScreen.Screen name="Home" component={Home} />
      <PostScreen.Screen name="Post" component={Post} />
    </PostScreen.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchScreen.Navigator>
      <SearchScreen.Screen name="Search" component={Search} />
    </SearchScreen.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Auth') {
            iconName = focused ? 'ios-person' : 'person-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'ios-home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }

          // You can return any component that you like here!
          return (
            <Icon name={iconName} size={size} type="ionicon" color="#FF0000" />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        component={PostStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
