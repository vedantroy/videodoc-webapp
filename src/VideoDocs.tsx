import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "@material-ui/core/Card";
import styled from "styled-components";

// font-feature-settings: "kern", "liga";
const VideoTitle = styled.h4`
  font-family: Inter, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 12px;
  margin-bottom: 0px;
`;

const VideoMetaData = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: Inter, Helvetica, sans-serif;
  color: rgb(145, 148, 161);
`;

const FolderHeader = styled.h2`
  font-family: Inter, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 32px;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  transition: opacity 0.25s;
  &: hover {
    opacity: 0.8;
  }
`;

const VideoCard = () => (
  <div>
    <Card style={{ height: 180, width: 320, backgroundColor: "black" }}>
      <Link to="1">
        <Thumbnail
          width={320}
          height={180}
          src="https://i.imgur.com/OF7ppmy.png"
        />
      </Link>
    </Card>
    <VideoTitle>Watch External Dependencies</VideoTitle>
    <VideoMetaData>
      <div>0:54</div>
      &nbsp; • &nbsp;
      <div>3 years ago</div>
    </VideoMetaData>
  </div>
);

const VideoPage = () => (
  <div style={{ width: "100%", height: `100%` }}>
    <Helmet>
      <script src="https://cdn.plyr.io/3.6.2/plyr.polyfilled.js"></script>
    </Helmet>
    <div
      className="plyr__video-embed"
      id="player"
      style={{ width: `100%`, height: `100%` }}
    >
      <iframe
        src="https://www.youtube.com/embed/LM_GRdirDCo"
        allowFullScreen
        allowTransparency
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        //allow="autoplay"
        style={{ width: `100%`, height: `100%`, borderWidth: "0px" }}
      ></iframe>
    </div>
  </div>
);

export default () => (
  <Routes>
    <Route
      path="/"
      element={
        <div style={{ padding: 25 }}>
          <FolderHeader>Babel Commit Videos</FolderHeader>
          <div
            style={{
              display: "grid",
              width: "100%",
              gap: 25,
              boxSizing: "border-box",
            }}
          >
            <VideoCard />
          </div>
        </div>
      }
    />
    <Route path="/:id" element={<VideoPage />} />
  </Routes>
);
