import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>facebook</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageIcon}>
          <FontAwesome name="facebook-messenger" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddfe2',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877f2',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  searchIcon: {
    backgroundColor: '#f0f2f5',
    borderRadius: 50,
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  messageIcon: {
    backgroundColor: '#f0f2f5',
    borderRadius: 50,
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;