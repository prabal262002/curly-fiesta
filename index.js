const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require('dotenv').config();
const { initializeDB } = require("./db/db.connect");
const Post = require("./models/post.model");
const User = require("./models/user.model");

initializeDB();
const userData = {
  name: "John",
  email: "john@gmail.com",
};

const addUser = async () => {
  try {
    const newUser = new User(userData);
    await newUser.save();
  } catch (error) {
    console.log("Error: ", error);
  }
};

const startApp = async () => {
  console.log("Attempting to connect to database...");
  await initializeDB(); 
  await addUser();      
};

// startApp();


const postData = {
  title: "Greeting",
  content: "Have a good day!",
  author: "670df9f2a5558bb39a31975f"
};

const addPost = async () => {
  try {
    const newPost = new Post(postData);
    await newPost.save();
    console.log("Post added successfully!!");
  } catch (error) {
    console.log("Error", error);
  }
};

// addPost();

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find().populate("author");
    console.log("All Posts: ", allPosts);
  } catch (error) {
    console.log("error ", error);
  }
};

getAllPosts();