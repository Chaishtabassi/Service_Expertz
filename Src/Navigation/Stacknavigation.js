import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import Loginscreen from '../Authentication/Loginscreen';
import Drawercontent from './Drawercontent';
import Homescreen from '../Screens/Homescreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import Toast from 'react-native-toast-message';
import Otpscreen from '../Authentication/Otpscreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              default:
                iconName = 'question';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            headerShown: true,
            headerTitle: 'Dashboard',
            headerStyle: {
              backgroundColor: '#F69008',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Ionicons
                name="menu"
                size={30}
                color="#fff"
                style={{ marginLeft: 10, top: 2 }}
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                  {/* <ToggleSwitch
                    onColor="#F69008"
                    offColor="white"
                    size="small"
                    circleColor="black"
                    style={styles.toggleContainer}
                  /> */}
                </View>
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={() => <Drawercontent />}>
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#625bc5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Loginscreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={Otpscreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppDrawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Stacknavigation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    backgroundColor: '#625bc5',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 20,
  },
  image: {
    height: 40,
    width: 150,
    alignItems: 'center',
  },
  imageicon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleSwitch: {
    borderWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex: 1,
    margin: 5,
  },
  buttonCancel: {
    backgroundColor: '#f44336',
  },
  buttonConfirm: {
    backgroundColor: '#4CAF50',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});