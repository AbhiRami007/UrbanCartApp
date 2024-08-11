import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from 'expo-router';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            // Handle logout logic here
            navigation.replace('login');
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />      
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerContent;