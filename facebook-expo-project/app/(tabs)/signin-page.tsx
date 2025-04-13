import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.logoText}>facebook</Text>
        
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile number or email address"
            value={phoneOrEmail}
            onChangeText={setPhoneOrEmail}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          <Pressable style={styles.loginButton} onPress={() => router.push('/home')}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </Pressable>
          
          <Pressable onPress={() => router.push('/forgot-password')}>
            <Text style={styles.forgotPasswordText}>Forgotten password?</Text>
          </Pressable>
          
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
          
          <Pressable style={styles.createAccountButton} onPress={() => router.push('/signup')}>
            <Text style={styles.createAccountButtonText}>Create New Account</Text>
          </Pressable>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <Text style={styles.footerText}>About</Text>
          <Text style={styles.footerText}>Help</Text>
          <Text style={styles.footerText}>More</Text>
        </View>
        
        <Text style={styles.copyright}>Meta © 2025</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1877f2',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dddfe2',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1877f2',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#1877f2',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 15,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#dadde1',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#606770',
    fontSize: 14,
  },
  createAccountButton: {
    backgroundColor: '#42b72a',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    marginBottom: 5,
  },
  createAccountButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 15,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  footerText: {
    color: '#737373',
    marginHorizontal: 10,
    fontSize: 14,
  },
  copyright: {
    textAlign: 'center',
    color: '#737373',
    fontSize: 12,
  },
});