Build a social network
Overview
With authenticated users, we now have the ability to create user profiles and content that is associated with those users.

That means we can build complete user generated websites with users and associated content. We can build a social network.

The relationship between users on a social network is a junction table follows with two user_ids. A follower_id and a followee_id. This table allows you to look up all the followers or followees of a particular user. From there, you can load their posts and comments.

Class Plan
Code Challenge: Build a social network (twitter/mastodon/bluesky clone)
Workshop
User Stories
🐿️ As a user, I am able to sign up for an account and create a user profile
🐿️ As a user, I am able to log in and out of my account
🐿️ As a user, I am able to create posts on my profile timeline
🐿️ As a user, I am able to see all posts by all users on a global timeline
Stretch Stories
🐿️ As a user, I am able to see a list of other user's posts and/or profiles on the site
🐿️ As a user, I am able able to visit other user profiles
🐿️ As a user, I am able to follow other users
🐿️ As a user, I am able to like posts I think are good, and see how many likes a post has
Requirements
🎯 Use Clerk.com to set up user signup and login.

🎯 Use the Clerk userId to associate posts with a user.

🎯 Enable each user to create a profile associated with their userId, and a form to input their biography and location data, etc. with a URL similar to /user/[userId].

🎯 Enable users to create posts associated with the userId, and display those posts on the user's profile page

🎯 Show a 404 error if a user profile doesn't exist

🎯 Use at least 1 Radix UI Primitive or similar

Stretch Goals
🏹 Enable users to visit other user profiles after seeing their posts on a global timeline

🏹 Enable users to follow other users by creating a follower and follwee relationship between two user profiles

🏹 Enable users to like other users' posts by creating a user_id and liked_post relationship in a junction table

🏹 A user's biography cannot be blank. If a user logs in but doesn't have a biography set, they should be asked to fill one in
