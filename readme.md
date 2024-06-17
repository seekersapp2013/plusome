# Test Assessment Requirement

Assessment 3: Real-Time Chat Application

Description: Build a real-time chat application.

Requirements:
User authentication (sign-up, login, logout).

Real-time messaging between you.

you can create and join chat rooms.

Display online/offline status of you.

Backend APIs for user and message management.

Technologies: React or Vue.js for the frontend, Node.js/Express or 
Django for the backend, and MongoDB or PostgreSQL or MySQL for the database.

# Solution

A simple chat app with real-time capabilities that built with Vite (Vue 3) for the Front End, Appwrite for the backend and deployed to Netlify.


# What is Appwrite

Appwrite is an open-source backend-as-a-service (BaaS) platform (similar to Firebase) designed to provide developers with a set of integrated backend services for building modern web and mobile applications. It aims to simplify and accelerate the development process by offering a variety of ready-to-use backend features. Here are some key aspects of Appwrite:

Authentication: Provides secure and customizable authentication systems, including support for email/password, OAuth, and other authentication methods.

Database: Offers a real-time database that supports both structured and unstructured data, allowing developers to store, query, and manage your application data efficiently.

Storage: Provides cloud storage for file management, enabling developers to upload, store, and retrieve files like images, videos, and documents.

Functions: Supports serverless functions, allowing developers to run custom backend code in response to various events or on-demand.

APIs: Appwrite provides RESTful and GraphQL APIs to interact with its services, making it easy to integrate into different types of applications.

Security: Emphasizes security features like role-based access control (RBAC), encryption, and secure data transfer to protect user data and application integrity.

Localization: Supports multiple languages and regional settings, allowing developers to build applications for a global audience.

Webhooks and Messaging: Includes support for webhooks and real-time messaging, facilitating event-driven architecture and real-time communication within applications.


# Testing this application - Login 

To test this application please follow the steps below

Step 1: visit https://plusome2.netlify.app/ it will redirect you to the Login Page

Step 2: input the following test credentials

Email: test@test.com

Password: babalola

Then click on the pink Login button

NB: you can also create your own account at https://plusome2.netlify.app then click on Register to visit the registration page. 

# Sign Up

To sign up visit https://plusome2.netlify.app tjem c;ocl pm the Register link below the pink Login button.

Then input the following information username, email, passowrd and confirm passowrd

Then click on the pink Register button. 

NB: Please note that you will not be able to verify your email address (Notification - Todo Feature) 

NB: Please note that you will not get a notification after registering, so just visit the login link then input your credentials to login.  (Email Verification - Todo Feature)

# Chat Room

After every successful Login, you will be redirected to the chat room page. Where you can see the messages posted by everyone in the room. Also, where you can post your own message. 

To Post a Message, input a message into the "Say Something..." input firled then click on the Send button.

NB: you will not get a notification of message being posted, so please refrsh the page after posting to see it on the list of messages. (Post Notification then Refresh - Todo Feature)

# Deleting A Post

To delete a post, you will find a delete icon next to any message you post click on that button and you post will be deleted. 

NB: please note that you will not get a notification prompting you and your post will be automatically delted. Also, ensure to refresh your browser after this action. 