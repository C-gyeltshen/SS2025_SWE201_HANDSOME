import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../Components/Header';
import Stories from './components/Stories';
import CreatePost from './components/Createpost';
import Post from './components/Post';
import BottomNavigation from '../Components/bottomnavigation';

interface PostData {
  id: number;
  username: string;
  timePosted: string;
  avatarUrl: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

export default function FacebookFeed(): React.JSX.Element {
  // Sample data for posts
  const [posts, setPosts] = useState<PostData[]>([
    {
      id: 1,
      username: 'Chimi CR',
      timePosted: '2 hrs ago',
      avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      content: 'Enjoyed the weekend with friends! Such an amazing time.',
      imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      likes: 152,
      comments: 23,
      shares: 5,
      isLiked: false
    },
    {
      id: 2,
      username: 'Gyaltsen',
      timePosted: '5 hrs ago',
      
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'Just completed my first marathon! Hard work pays off.',
      imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      likes: 304,
      comments: 56,
      shares: 12,
      isLiked: false
    },
    {
      id: 3,
      username: 'Tenzin',
      timePosted: '12 hrs ago',
      avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
      content: 'The new café downtown has amazing pastries! Highly recommend checking it out.',
      imageUrl: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      likes: 89,
      comments: 11,
      shares: 3,
      isLiked: false
    },
    {
      id: 4,
      username: 'Dorji',
      timePosted: '1 day ago',
      avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
      content: 'Beautiful sunset today at the beach. Nature never fails to amaze me.',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      likes: 421,
      comments: 34,
      shares: 15,
      isLiked: false
    }
  ]);

  // Handle like button press
  const handleLike = (postId: number): void => {
    setPosts(posts.map((post: PostData) => {
      if (post.id === postId) {
        const newIsLiked: boolean = !post.isLiked;
        return {
          ...post,
          isLiked: newIsLiked,
          likes: newIsLiked ? post.likes + 1 : post.likes - 1
        };
      }
      return post;
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Stories row */}
        <Stories />

        {/* Create post section */}
        <CreatePost />

        {/* Posts feed */}
        {posts.map((post: PostData) => (
          <Post key={post.id} post={post} onLike={handleLike} />
        ))}
        
        {/* Add some bottom padding to ensure last post is visible above bottom nav */}
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Bottom navigation */}
      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});