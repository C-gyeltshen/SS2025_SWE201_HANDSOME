import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

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

interface PostProps {
  post: PostData;
  onLike: (postId: number) => void;
}

const Post: React.FC<PostProps> = ({ post, onLike }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.avatarUrl }} style={styles.postAvatar} />
        <View style={styles.postHeaderInfo}>
          <Text style={styles.postUsername}>{post.username}</Text>
          <Text style={styles.postTime}>{post.timePosted}</Text>
        </View>
        <TouchableOpacity style={styles.postMenu}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#65676b" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.postContent}>{post.content}</Text>
      
      {post.imageUrl && (
        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      )}
      
      <View style={styles.postStats}>
        <View style={styles.likesContainer}>
          <View style={styles.likeIconsContainer}>
            <View style={[styles.likeIcon, styles.likeIconBlue]}>
              <FontAwesome name="thumbs-up" size={10} color="#fff" />
            </View>
            <View style={[styles.likeIcon, styles.likeIconRed]}>
              <FontAwesome name="heart" size={10} color="#fff" />
            </View>
          </View>
          <Text style={styles.statsText}>{post.likes}</Text>
        </View>
        <View style={styles.commentsSharesContainer}>
          <Text style={styles.statsText}>{post.comments} Comments</Text>
          <Text style={styles.statsText}>{post.shares} Shares</Text>
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.postActions}>
        <TouchableOpacity 
          style={styles.postActionButton}
          onPress={() => onLike(post.id)}
        >
          <FontAwesome 
            name="thumbs-up" 
            size={20} 
            color={post.isLiked ? "#1877f2" : "#65676b"} 
          />
          <Text 
            style={[
              styles.postActionButtonText, 
              post.isLiked && styles.activeActionText
            ]}
          >
            Like
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.postActionButton}>
          <FontAwesome name="comment" size={20} color="#65676b" />
          <Text style={styles.postActionButtonText}>Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.postActionButton}>
          <FontAwesome name="share" size={20} color="#65676b" />
          <Text style={styles.postActionButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    marginBottom: 8,
    padding: 12,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postHeaderInfo: {
    flex: 1,
  },
  postUsername: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postTime: {
    fontSize: 12,
    color: '#65676b',
  },
  postMenu: {
    padding: 5,
  },
  postContent: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIconsContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  likeIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -6,
  },
  likeIconBlue: {
    backgroundColor: '#1877f2',
    zIndex: 1,
  },
  likeIconRed: {
    backgroundColor: '#e41e3f',
  },
  statsText: {
    fontSize: 12,
    color: '#65676b',
  },
  commentsSharesContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 5,
  },
  postActionButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#65676b',
  },
  activeActionText: {
    color: '#1877f2',
  },
  divider: {
    height: 1,
    backgroundColor: '#dddfe2',
    marginVertical: 10,
  },
});

export default Post;