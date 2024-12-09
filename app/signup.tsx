// app/signup.js
import React, { useState } from 'react';
import { TextInput, Button, Text, View, SafeAreaView } from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../firebase';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push('/(home-tabs)/home'); // Navigate to home screen
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        />
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
