import React from "react";
import "./homestyle.css";
import Card from "../../components/UI/cards/Card";
import SideBar from "../../components/SideBar/SideBar";
import RecentPost from "./RecentPosts/RecentPost";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}` }}>
      <img src={props.src} alt="" />
    </div>
  );
};

const ImageGallary = (props) => (
  <div className="gallaryPost" style={props.gallaryStyle}>
    <section style={{ width: "70%" }}>
      <div>
        <img
          src="https://www.aktend.com/wp-content/uploads/2019/12/Ashika-Ranganath-39.jpg"
          alt="GallaryImage"
        />
      </div>
    </section>

    <section className="sideImageWrapper" style={{ width: "30%" }}>
      <SideImage
        height={props.sideImageHeight}
        src={
          "https://s3images.zee5.com/wp-content/uploads/sites/7/2019/09/A-Still-Of-Ashika-Rangnath.jpg"
        }
      />
      <SideImage
        height={props.sideImageHeight}
        src={
          "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/15/w900X450/Ashika_Ranganath.jpg"
        }
      />
      <SideImage
        height={props.sideImageHeight}
        src={"https://wallpaperaccess.com/full/2252049.jpg"}
      />
    </section>
  </div>
);

const Home = (props) => {
  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = gallaryHeight / 3;
  return (
    <div>
      <Card style={{ margin: "20px 0" }}>
        <ImageGallary
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          gallaryStyle={gallaryStyle}
        />
      </Card>

      <section className="homePageContainer">
        <RecentPost style={{ width: "70%" }} />
        <SideBar />
      </section>
    </div>
  );
};

export default Home;
