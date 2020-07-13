import React from "react";
import "./poststyle.css";
import BlogPost from "../../components/BlogPosts/BlogPost";
import SideBar from "../../components/SideBar/SideBar";

function Posts(props) {
  console.log(props);
  return (
    <section className="container">
      <BlogPost {...props}/>
      <SideBar {...props}/>
    </section>
  );
}

export default Posts;
