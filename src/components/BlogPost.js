import React from "react";
import Navbar from "./Navbar";
import blogData from "../helpers/blogshelper";

function BlogPost(props) {
  const id = props.match.params.id.substring(1);
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>{blogData[id - 1]["title"]}</h1>
        <h4>
          <i>{"By - " + blogData[id - 1]["author"]}</i>
        </h4>
        <img src={blogData[id - 1]["src"]} alt='' />
        <p>{blogData[id - 1]["content"]}</p>
      </div>
    </div>
  );
}

export default BlogPost;
