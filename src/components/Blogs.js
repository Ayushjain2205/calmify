import React, { Component } from "react";
import Navbar from "./Navbar";
import BlogTile from "./BlogTile";

export class blogs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div style={tileStyle}>
            {this.props.data.map((item) => (
              <BlogTile
                id={item.id}
                title={item.title}
                author={item.author}
                src={item.src}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const tileStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1.2rem",
  margin: "1.2rem",
};

export default blogs;
