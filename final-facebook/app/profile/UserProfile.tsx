import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../Components/bottomnavigation';

const UserProfile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Cover Photo */}
        <View style={styles.coverPhotoContainer}>
          <View style={styles.coverPhoto}>
            <Image
              source={{ uri: 'https://via.placeholder.com/400x200/4267B2/ffffff?text=Cover+Photo' }}
              style={styles.coverImage}
            />
          </View>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/120x120/1877f2/ffffff?text=AP' }}
              style={styles.profileImage}
            />
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Ayan Serwan</Text>
            <Text style={styles.userHandle}>@ayanserwan</Text>
            <Text style={styles.followersCount}>1.8K friends</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.addStoryButton}>
              <Ionicons name="add" size={16} color="#fff" />
              <Text style={styles.addStoryText}>Add to story</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.editProfileButton}>
              <Ionicons name="create-outline" size={16} color="#000" />
              <Text style={styles.editProfileText}>Edit profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.moreActionsButton}>
              <Ionicons name="ellipsis-horizontal" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>More</Text>
          </TouchableOpacity>
        </View>

        {/* Bio Section */}
        <View style={styles.bioSection}>
          <Text style={styles.bio}>
            Software Developer | React Native Enthusiast{'\n'}
            📍 Location: City, Country{'\n'}
            🎓 University Graduate{'\n'}
            ✨ Building amazing mobile apps
          </Text>
        </View>

        {/* Friends Preview */}
        <View style={styles.friendsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Friends</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.friendsCount}>1,847 friends</Text>
          
          <View style={styles.friendsGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View key={item} style={styles.friendItem}>
                <Image
                  source={{ uri: `https://via.placeholder.com/100x100/65676b/ffffff?text=F${item}` }}
                  style={styles.friendImage}
                />
                <Text style={styles.friendName}>Friend {item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Posts Section */}
        <View style={styles.postsSection}>
          <Text style={styles.sectionTitle}>Posts</Text>
          
          {/* Sample Post */}
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: 'https://via.placeholder.com/40x40/1877f2/ffffff?text=AP' }}
                style={styles.postAuthorImage}
              />
              <View style={styles.postAuthorInfo}>
                <Text style={styles.postAuthorName}>Ayan Serwan</Text>
                <Text style={styles.postTime}>2 hours ago</Text>
              </View>
            </View>
            
            <Text style={styles.postContent}>
              Just finished working on an amazing React Native project! 
              The new features look incredible. Can't wait to share more updates soon! 🚀
            </Text>
            
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.postAction}>
                <Ionicons name="heart-outline" size={20} color="#65676b" />
                <Text style={styles.postActionText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postAction}>
                <Ionicons name="chatbubble-outline" size={20} color="#65676b" />
                <Text style={styles.postActionText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postAction}>
                <Ionicons name="share-outline" size={20} color="#65676b" />
                <Text style={styles.postActionText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation activeTab="profile" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 5,
  },
  moreButton: {
    padding: 5,
  },
  coverPhotoContainer: {
    backgroundColor: '#fff',
  },
  coverPhoto: {
    height: 200,
    backgroundColor: '#dddfe2',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  profileSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1e21',
    marginBottom: 2,
  },
  userHandle: {
    fontSize: 16,
    color: '#65676b',
    marginBottom: 5,
  },
  followersCount: {
    fontSize: 16,
    color: '#65676b',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  addStoryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1877f2',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 5,
  },
  addStoryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  editProfileButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4e6ea',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 5,
  },
  editProfileText: {
    color: '#1c1e21',
    fontWeight: '600',
    fontSize: 16,
  },
  moreActionsButton: {
    backgroundColor: '#e4e6ea',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddfe2',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1877f2',
  },
  tabText: {
    fontSize: 16,
    color: '#65676b',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#1877f2',
    fontWeight: '600',
  },
  bioSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: '#1c1e21',
    lineHeight: 22,
  },
  friendsSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c1e21',
  },
  seeAllText: {
    fontSize: 16,
    color: '#1877f2',
    fontWeight: '500',
  },
  friendsCount: {
    fontSize: 16,
    color: '#65676b',
    marginBottom: 15,
  },
  friendsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  friendItem: {
    width: '30%',
  },
  friendImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    marginBottom: 5,
  },
  friendName: {
    fontSize: 14,
    color: '#1c1e21',
    fontWeight: '500',
  },
  postsSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  postCard: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  postAuthorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postAuthorInfo: {
    flex: 1,
  },
  postAuthorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1e21',
  },
  postTime: {
    fontSize: 12,
    color: '#65676b',
  },
  postContent: {
    fontSize: 16,
    color: '#1c1e21',
    lineHeight: 22,
    marginBottom: 15,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#dddfe2',
    paddingTop: 12,
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  postActionText: {
    fontSize: 14,
    color: '#65676b',
    fontWeight: '500',
  },
});

export default UserProfile;