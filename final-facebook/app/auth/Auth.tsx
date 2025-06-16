import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Auth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleMagicLink = () => {
    setLoading(true);
    // Add a small delay to show loading state
    setTimeout(() => {
      setLoading(false);
      router.navigate('/auth/magicLink');
    }, 500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1877F2" />
      
      {/* Header with gradient */}
      <LinearGradient
        colors={['#1877F2', '#42A5F5']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <Text style={styles.appName}>facebook</Text>
          <Text style={styles.tagline}>Connect with friends and the world around you</Text>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <View style={styles.container}>
        <View style={styles.contentCard}>
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Welcome Back</Text>
            <Text style={styles.welcomeSubtitle}>
              Sign in to your account using Magic Link for a secure and passwordless experience
            </Text>
          </View>

          {/* Magic Link Section */}
          <View style={styles.authSection}>
            <View style={styles.magicLinkContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="mail" size={24} color="#1877F2" />
              </View>
              <Text style={styles.magicLinkTitle}>Magic Link Authentication</Text>
              <Text style={styles.magicLinkDescription}>
                We'll send you a secure link to sign in instantly without a password
              </Text>
            </View>

            <Button
              title={loading ? "Preparing..." : "Continue with Magic Link"}
              buttonStyle={styles.magicLinkButton}
              titleStyle={styles.magicLinkButtonText}
              disabled={loading}
              loading={loading}
              loadingStyle={styles.loadingStyle}
              onPress={handleMagicLink}
              icon={
                !loading && (
                  <Ionicons 
                    name="arrow-forward" 
                    size={20} 
                    color="white" 
                    style={{ marginLeft: 8 }} 
                  />
                )
              }
              iconRight
            />
          </View>

          {/* Security Note */}
          <View style={styles.securityNote}>
            <Ionicons name="shield-checkmark" size={16} color="#42B883" />
            <Text style={styles.securityText}>
              Secure • No passwords • Quick access
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  headerContent: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  contentCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  welcomeSection: {
    marginBottom: 32,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1E21',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#65676B',
    textAlign: 'center',
    lineHeight: 22,
  },
  authSection: {
    marginBottom: 24,
  },
  magicLinkContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  magicLinkTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1E21',
    marginBottom: 8,
    textAlign: 'center',
  },
  magicLinkDescription: {
    fontSize: 14,
    color: '#65676B',
    textAlign: 'center',
    lineHeight: 20,
  },
  magicLinkButton: {
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
  },
  magicLinkButtonText: {
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
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#65676B',
    textAlign: 'center',
    lineHeight: 16,
  },
});