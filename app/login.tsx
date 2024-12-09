// app/login.js
import React, { useState } from 'react';
import { TextInput, Button, Text, View, SafeAreaView } from 'react-native';
import { auth, signInWithEmailAndPassword } from '../firebase';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await AsyncStorage.setItem('user', JSON.stringify(user));
                router.push('/(home-tabs)/home')
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
                <Button title="Login" onPress={handleLogin} />
                <Button title="Sign up" onPress={() => router.push('/signup')} />
            </View>
        </SafeAreaView>
    );
};

export default Login;
