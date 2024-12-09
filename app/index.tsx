import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve user data from AsyncStorage
    const getUserFromStorage = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // Set the user if found
        router.push('/(home-tabs)/home'); // Navigate to the home screen if a user exists
      } else {
        setIsLoading(false); // No user found, show the login screen
        router.push('/login');
      }
    };

    getUserFromStorage();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return null; // Return nothing because the routing is handled by Expo Router
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
