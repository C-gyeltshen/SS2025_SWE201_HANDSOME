import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Alert,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function MagicLink() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendMagicLink = async () => {
    // Reset states
    setEmailError("");
    
    if (!email.trim()) {
      setEmailError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim().toLowerCase(),
        options: {
          // You can add redirect options here if needed
        },
      });

      if (error) {
        Alert.alert("Error", error.message);
        return;
      }

      setEmailSent(true);
    } catch (err) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendMagicLink = () => {
    setEmailSent(false);
    sendMagicLink();
  };

  const goBack = () => {
    router.back();
  };

  if (emailSent) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#1877F2" />
        
        {/* Header */}
        <LinearGradient
          colors={['#1877F2', '#42A5F5']}
          style={styles.headerSmall}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.headerContent}>
            <Button
              onPress={goBack}
              buttonStyle={styles.backButton}
              icon={<Ionicons name="arrow-back" size={20} color="white" />}
            />
            <Text style={styles.headerTitle}>Check Your Email</Text>
            <View style={styles.placeholder} />
          </View>
        </LinearGradient>

        <View style={styles.container}>
          <View style={styles.successCard}>
            <View style={styles.successIconContainer}>
              <Ionicons name="mail" size={48} color="#42B883" />
            </View>
            <Text style={styles.successTitle}>Magic Link Sent!</Text>
            <Text style={styles.successMessage}>
              We've sent a secure login link to{"\n"}
              <Text style={styles.emailText}>{email}</Text>
            </Text>
            <Text style={styles.instructionText}>
              Click the link in your email to sign in instantly. The link will expire in 1 hour.
            </Text>
            
            <View style={styles.actionButtons}>
              <Button
                title="Resend Magic Link"
                buttonStyle={styles.resendButton}
                titleStyle={styles.resendButtonText}
                onPress={resendMagicLink}
                disabled={loading}
                loading={loading}
              />
              <Button
                title="Use Different Email"
                buttonStyle={styles.changeEmailButton}
                titleStyle={styles.changeEmailButtonText}
                onPress={() => setEmailSent(false)}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1877F2" />
      
      {/* Header */}
      <LinearGradient
        colors={['#1877F2', '#42A5F5']}
        style={styles.headerSmall}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <Button
            onPress={goBack}
            buttonStyle={styles.backButton}
            icon={<Ionicons name="arrow-back" size={20} color="white" />}
          />
          <Text style={styles.headerTitle}>Magic Link</Text>
          <View style={styles.placeholder} />
        </View>
      </LinearGradient>

      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.formCard}>
              {/* Form Header */}
              <View style={styles.formHeader}>
                <View style={styles.iconContainer}>
                  <Ionicons name="mail-outline" size={32} color="#1877F2" />
                </View>
                <Text style={styles.formTitle}>Enter Your Email</Text>
                <Text style={styles.formSubtitle}>
                  We'll send you a secure link to sign in without a password
                </Text>
              </View>

              {/* Email Input */}
              <View style={styles.inputSection}>
                <Input
                  label="Email Address"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    setEmailError("");
                  }}
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  containerStyle={styles.inputContainer}
                  inputContainerStyle={[
                    styles.inputField,
                    emailError ? styles.inputError : null
                  ]}
                  inputStyle={styles.inputText}
                  labelStyle={styles.inputLabel}
                  leftIcon={
                    <Ionicons 
                      name="mail-outline" 
                      size={20} 
                      color={emailError ? "#FF3B30" : "#8E8E93"} 
                    />
                  }
                  errorMessage={emailError}
                  errorStyle={styles.errorText}
                />
              </View>

              {/* Send Button */}
              <Button
                title={loading ? "Sending..." : "Send Magic Link"}
                buttonStyle={[
                  styles.sendButton,
                  (!email.trim() || emailError) && styles.sendButtonDisabled
                ]}
                titleStyle={styles.sendButtonText}
                disabled={loading || !email.trim() || !!emailError}
                loading={loading}
                loadingStyle={styles.loadingStyle}
                onPress={sendMagicLink}
                icon={
                  !loading && (
                    <Ionicons 
                      name="send" 
                      size={18} 
                      color="white" 
                      style={{ marginRight: 8 }} 
                    />
                  )
                }
              />

              {/* Security Note */}
              <View style={styles.securityNote}>
                <Ionicons name="shield-checkmark" size={16} color="#42B883" />
                <Text style={styles.securityText}>
                  Secure and passwordless authentication
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerSmall: {
    paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: 'transparent',
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  placeholder: {
    width: 36,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1E21',
    marginBottom: 8,
    textAlign: 'center',
  },
  formSubtitle: {
    fontSize: 16,
    color: '#65676B',
    textAlign: 'center',
    lineHeight: 22,
  },
  inputSection: {
    marginBottom: 24,
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputField: {
    borderBottomWidth: 2,
    borderBottomColor: '#E4E6EA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F8F9FA',
  },
  inputError: {
    borderBottomColor: '#FF3B30',
  },
  inputText: {
    fontSize: 16,
    color: '#1C1E21',
    marginLeft: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#65676B',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 12,
    color: '#FF3B30',
    marginTop: 4,
  },
  sendButton: {
    backgroundColor: '#1877F2',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: '#1877F2',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 20,
  },
  sendButtonDisabled: {
    backgroundColor: '#BDC3C7',
    shadowOpacity: 0,
    elevation: 0,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  loadingStyle: {
    color: 'white',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E4E6EA',
  },
  securityText: {
    fontSize: 12,
    color: '#42B883',
    marginLeft: 6,
    fontWeight: '500',
  },
  // Success Screen Styles
  successCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1E21',
    marginBottom: 12,
    textAlign: 'center',
  },
  successMessage: {
    fontSize: 16,
    color: '#65676B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  emailText: {
    fontWeight: '600',
    color: '#1877F2',
  },
  instructionText: {
    fontSize: 14,
    color: '#8A8D91',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  actionButtons: {
    width: '100%',
    gap: 12,
  },
  resendButton: {
    backgroundColor: '#1877F2',
    borderRadius: 12,
    paddingVertical: 14,
  },
  resendButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  changeEmailButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#E4E6EA',
    borderRadius: 12,
    paddingVertical: 14,
  },
  changeEmailButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#65676B',
  },
});