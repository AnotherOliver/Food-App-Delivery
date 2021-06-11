import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';

const Login = ({navigation}) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Login Screen </Text>
            <TextInput style={styles.input}value={email} placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <TextInput
                style={styles.input}
                value={password}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}/>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('dangki')}>
                <Text onPress={
                    ()=>navigation.navigate('dangki')
                } style={styles.navButtonText}>New user? Join here</Text>
            </TouchableOpacity>
        </View>
    );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 10
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 20,
        color: '#FF8C00'
    },
    input: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: width / 1.5,
        height: height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    },
    buttonContainer: {
        marginTop: 10,
        width: width / 2,
        height: height / 15,
        backgroundColor: '#FF8C00',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontSize: 28,
        color: '#ffffff'
    }
});

export default Login;