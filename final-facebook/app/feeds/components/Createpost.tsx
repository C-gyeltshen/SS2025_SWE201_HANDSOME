import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const CreatePost: React.FC = () => {
  return (
    <View style={styles.createPostContainer}>
      <View style={styles.createPostRow}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/12.jpg' }}
          style={styles.userAvatar}
        />
        <TextInput
          style={styles.createPostInput}
          placeholder="What's on your mind?"
          placeholderTextColor="#65676b"
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.postActionsContainer}>
        <TouchableOpacity style={styles.postAction}>
          <Ionicons name="videocam" size={20} color="#F44337" />
          <Text style={styles.postActionText}>Live</Text>
        </TouchableOpacity>
        <View style={styles.postActionDivider} />
        <TouchableOpacity style={styles.postAction}>
          <Ionicons name="images" size={20} color="#4CAF50" />
          <Text style={styles.postActionText}>Photos</Text>
        </TouchableOpacity>
        <View style={styles.postActionDivider} />
        <TouchableOpacity style={styles.postAction}>
          <MaterialCommunityIcons name="video-plus" size={22} color="#673AB7" />
          <Text style={styles.postActionText}>Room</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createPostContainer: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
  },
  createPostRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  createPostInput: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#dddfe2',
    marginVertical: 10,
  },
  postActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 5,
  },
  postActionText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#65676b',
  },
  postActionDivider: {
    width: 1,
    backgroundColor: '#dddfe2',
  },
});

export default CreatePost;