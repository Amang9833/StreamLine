import styled from "styled-components";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from 'axios'
import { useState, useEffect } from "react";

const Container = styled.div`
  overflow-y: auto;
  width: 100%;
  background-color: #f9f9f9;
`;



const VideoSection = styled.div`
  /* height: ; */
  width: 100%;
  height: calc(100vh - 60px);
  background-color: white;
  overflow-y: auto;
  display: flex;
  gap: 20px;
  padding: 12px 1%;
  flex-wrap: wrap;
  padding: 20px 4%;
`;




function App() {
  var [Userdata, setUserData] = useState([])
  useEffect(() => {
      const fetch = async () => {
        const res = await axios('/video/getvideo');
        setUserData(res.data)
  }
  fetch();
  }, [])
  
  return (
    <>
      <Container>
        <Navbar />
        <VideoSection>
          {
            Userdata.map((video) => (
              <Card key={video._id} data={video} />
              )
          )
          }
        </VideoSection>
      </Container>
    </>
  );
}

export default App;
