import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const DrawerContent = props => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../Assets/logo.png')}
        />
      </View>

        <TouchableOpacity
          style={styles.drawerItemsingle}
          onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={20} color="#333" style={styles.icon} />
          <Text style={styles.label}>Dashboard</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>

  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '50%',
    width: '80%',
    alignSelf: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  drawerItemsingle: {
    flexDirection: 'row',
    padding: 10,
  },
  drawerItem1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
  },
  subMenu: {
    marginTop: 10,
  },
  subMenuItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  subMenuText: {
    fontSize: 14,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#385dab',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DrawerContent;
