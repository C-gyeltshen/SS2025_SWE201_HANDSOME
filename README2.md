# Event Storming Documentation for Facebook App

## Introduction
This document outlines the event storming session conducted for the Facebook application. It captures the key domain events, commands, aggregates, and actors involved in the system.

## Scope and Objectives
**Scope** : Scope of this document is to capture the key domain events and command involved in the Facebook application. Like, 

- User Registration
- View Profile
- Update Profile
- Create Post
- Like Post
- Comment on Post
- Share Post
- Report Post
- Block User
- Tag Friend
- Create Story
- View Story
- Like Story
- Comment on Story
- Share Story
- Report Story
- Send Friend Request
- Accept Friend Request
- Reject Friend Request
- View Friend List
- View Notification
- View News Feed
- Creating Group

**Objective** : The objective of this document is to provide a high-level overview of the Facebook application and capture the key domain events and commands involved in the system.     



## Domain Events

The following domain events are identified in the Facebook application:

![domain_event](../)

- **UserRegistered** – A new user has signed up.
- **ProfileUpdated** – A user has changed their profile details.
- **PostCreated** – A user has published a new post.
- **PostLiked** – A user liked a post.
- **PostCommented** – A user commented on a post.
- **FriendRequestSent** – A user sent a friend request.
- **FriendRequestAccepted** – A friend request was accepted.
- **MessageSent** – A private message was sent.
- **ProfilePictureUploaded** - When a user uploads a profile picture
- **FriendsNotified** - When friends are notified about an action
- **CaptionAdded** - When a caption is added to a post or image
- **PrivacyStatusChanged** - When privacy settings for a post are modified
- **ImageUploaded** - When an image is uploaded to the system
- **ReactedToPost** - When a user reacts to a post
- **UserNotified** - When a notification is sent to a user
- **PostReported** - When a post is reported by a user
- **UserWarned** - When a user receives a warning
- **TemporaryBanUser** - When a user is temporarily banned
- **UserBanned** - When a user is permanently banned
- **TaggedFriends** - When friends are tagged in content
- **StoryCreated** - When a user creates a story
- **ViewedStory** - When a story is viewed by a user
- **ReactedToStory** - When a user reacts to a story
- **StoryReported** - When a story is reported by a user
- **CommentToStory** - When a comment is added to a story
- **SharedPost** - A post has been shared by a user
- **StoryShared** - A story has been shared by a user
- **UserNotified** - A user has received a notification
- **FriendNotified** - A notification has been sent to a user's friend
- **FriendRequestDeclined** - A user has declined a friend request
- **InvitedToGroup** - A user has been invited to join a group
- **LeftGroup** - A user has voluntarily left a group
- **ViewedGroup** - A user has viewed a group's content
- **FollowedUser** - A user has followed another user's profile
- **UnfollowedUser** - A user has unfollowed another user they were previously following
- **UserPostReported** - A user's post has been reported for inappropriate content
- **UserWarned** - A user has received a warning for violating community guidelines
- **TemporaryBanUser** - A user has been temporarily banned from the platform
- **UserBanned** - A user has been permanently banned from the platform
- **UserBlocked** - A user has been blocked by another user
- **SettingsViewed** - A user has viewed their account settings
- **PrivacySettingsViewed** - A user has viewed their privacy settings
- **UpdatedStatus** - A user has updated their status information
- **ChangedPassword** - A user has changed their account password
- **BlocklistViewed** - A user has viewed their blocklist of users
- **MobileNumberChanged** - A user has updated their phone number
- **UnblockedUser** - A user has removed another user from their blocklist
- **ChangedEmail** - A user has updated their email address
- **UserSwitched** - A user has switched between accounts
- **UserLoggedOut** - A user has signed out of their account
- **AccountDeactivated** -  A user has deleted their account

## Facebook Application - Command List

### User Management
| **Command** | **Description** |
|------------|----------------|
| `RegisterUser` | Create a new user account. |
| `CreateProfile` | Set up a user's profile. |
| `UpdateProfileDetails` | Modify profile information. |
| `UploadProfilePicture` | Change or add a profile picture. |
| `SwitchAccount` | Toggle between multiple accounts. |
| `LogOut` | End the current user session. |
| `DeleteAccount` | Permanently remove the user profile. |

---

### Posts & Media
| **Command** | **Description** |
|------------|----------------|
| `CreatePost` | Publish a new post. |
| `ViewPost` | Access and read a post. |
| `AddCaption` | Add a caption to a post or image. |
| `ChoosePrivacyStatus` | Set privacy settings for a post. |
| `UploadImage` | Attach an image to a post. |
| `TagFriend` | Mention/tag friends in content. |
| `ReactToPost` | Like, love, or react to a post. |
| `CommentToPost` | Add a comment to a post. |
| `SharePost` | Share a post with others. |
| `ReportPost` | Flag a post for inappropriate content. |
| `RemovePost` | Delete an existing post. |

---

### Stories
| **Command** | **Description** |
|------------|----------------|
| `CreateStory` | Publish a new story. |
| `UploadImage` | Upload media to a story. |
| `TagFriend` | Mention a friend in a story. |
| `AddCaption` | Include a caption in a story. |
| `ChoosePrivacyStatus` | Set privacy options for a story. |
| `ViewStory` | Watch a story. |
| `ReactToStory` | React to a story. |
| `CommentToStory` | Add a comment to a story. |
| `ShareStory` | Share a story with others. |
| `ReportStory` | Report an inappropriate story. |
| `RemoveStory` | Delete an existing story. |

---

### Friendships & Groups
| **Command** | **Description** |
|------------|----------------|
| `AcceptFriendRequest` | Approve a friend request. |
| `DeclineFriendRequest` | Reject a friend request. |
| `InviteFriendToGroup` | Invite a user to join a group. |
| `LeaveGroup` | Exit a group voluntarily. |
| `FollowUser` | Follow another user's profile. |

---

### Notifications & Moderation
| **Command** | **Description** |
|------------|----------------|
| `NotifyFriend` | Send a notification to a friend. |
| `WarnUser` | Issue a warning to a rule violator. |
| `TemporaryBanUser` | Temporarily restrict a user. |

---

### Security & Privacy
| **Command** | **Description** |
|------------|----------------|
| `ViewSettings` | Access account settings. |
| `ViewPrivacySettings` | View and configure privacy settings. |
| `ChangePassword` | Update account security credentials. |
| `ChangeMobileNumber` | Modify the registered phone number. |
| `ChangeEmail` | Update the user’s email address. |
| `ViewBlocklist` | See a list of blocked users. |
| `BlockUser` | Prevent a specific user from interacting. |
| `UnblockUser` | Remove a block on a user. |

---

## Aggregates

![final](./image/final.jpg)

1. **User**
2. **Post**
3. **Story**
4. **FriendRequest**
5. **Settings**
6. **notification**
7. **Notification**
8. **Moderation**