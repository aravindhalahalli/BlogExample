import React from "react";
import "./recentposts.css";
import Card from "../../../components/UI/cards/Card";

const RecentPost = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src="https://www.filmibeat.com/ph-big/2020/03/ashika-ranganath_1583399694160.jpg"
            alt="AshilaLove"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Fitness Mantra To Live Fit Life</h2>
          <span>Posted on July 21, 2016 by Faiz Khan</span>
          <p>
            Midst first it, you're multiply divided. There don't, second his one
            given the he one third rule fruit, very. Fill. Seed give firmament
            doesn't land, isn't lesser creeping. Abundantly you called signs
            waters yielding he cattle greater were evening. Sixth make moving
            the multiply dom.
          </p>
          <button>Read More</button>
        </div>
      </Card>

      <Card style={{ marginBottom: "20px" }}>Post2</Card>
    </div>
  );
};

export default RecentPost;
