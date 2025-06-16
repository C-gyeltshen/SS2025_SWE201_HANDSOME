import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';

interface BottomNavigationProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  
  activeTab = 'home', 
  onTabPress 
}) => {
  const router = useRouter();
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => onTabPress?.('home')}
      >
        <Ionicons 
          name="home" 
          size={26} 
          color={activeTab === 'home' ? '#1877f2' : '#65676b'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => onTabPress?.('friends')}
      >
        <Ionicons 
          name="people" 
          size={26} 
          color={activeTab === 'friends' ? '#1877f2' : '#65676b'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => onTabPress?.('notifications')}
      >
        <Ionicons 
          name="notifications" 
          size={26} 
          color={activeTab === 'notifications' ? '#1877f2' : '#65676b'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => {
          onTabPress?.('profile');
          router.push('/profile/UserProfile');
        }}
      >
        <Ionicons 
          name="person-circle" 
          size={26} 
          color={activeTab === 'profile' ? '#1877f2' : '#65676b'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddfe2',
    paddingHorizontal: 15,
  },
  navButton: {
    paddingHorizontal: 8,
  },
});

export default BottomNavigation;