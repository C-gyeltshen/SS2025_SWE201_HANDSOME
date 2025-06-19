import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stories: React.FC = () => {
  const storyNames: string[] = ['Gyaltsen', 'Tenzin', 'Dorji', 'Karma', 'Pema'];

  return (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
        {/* Add story button */}
        <View style={styles.addStoryContainer}>
          <View style={styles.addStoryImageContainer}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/12.jpg' }}
              style={styles.addStoryImage}
            />
            <View style={styles.addStoryButton}>
              <Ionicons name="add-circle" size={24} color="#1877f2" />
            </View>
          </View>
          <Text style={styles.storyText}>Add to Story</Text>
        </View>
        
        {/* Other stories */}
        {storyNames.map((name: string, index: number) => (
          <View key={index} style={styles.storyContainer}>
            <View style={styles.storyImageContainer}>
              <Image
                source={{ uri: `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${20 + index}.jpg` }}
                style={styles.storyImage}
              />
            </View>
            <Text style={styles.storyText}>{name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginBottom: 8,
  },
  storiesScroll: {
    paddingLeft: 15,
  },
  addStoryContainer: {
    width: 100,
    marginRight: 8,
  },
  addStoryImageContainer: {
    height: 140,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dddfe2',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addStoryImage: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  addStoryButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    bottom: 5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  storyContainer: {
    width: 100,
    marginRight: 8,
  },
  storyImageContainer: {
    height: 140,
    borderRadius: 12,
    backgroundColor: '#dddfe2',
    overflow: 'hidden',
    position: 'relative',
  },
  storyImage: {
    width: '100%',
    height: '100%',
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Stories;