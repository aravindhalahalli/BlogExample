import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./sidebarstyle.css";
import Card from "../UI/cards/Card";
import blogPost from "../../data/blog.json";

const SideBar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);
  return (
    <div className="sidebarContainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImg">
          <img
            src="https://i.pinimg.com/originals/f4/43/5f/f4435f0a8ae035734058e9b593ee5c60.jpg"
            alt="profile"
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of type and
            scrambled it to make a type specimen book it ha
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/posts/${post.id}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
