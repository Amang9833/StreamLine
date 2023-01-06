import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from './../firebase.js'
import axios from 'axios';


const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff1b;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90;
  
`;

const Wrapper = styled.div`
  width: 600px;
  height: 550px;
  background-color: #797474;
  color: black;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.123) 0px 18px 50px -10px;


  &:hover {
    box-shadow: rgba(0, 0, 0, 0.344) 0px 18px 50px -10px;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 22px;
  padding: 2px 4px;
  border-radius: 50%;
  height: 6%;
  width: 6%;

  &:hover{
    transform:scale(1.2);
  }
`;
const Title = styled.h1`
  text-align: center;
  &::placeholder {
    color: black;
  }
`;

const Input = styled.input`
  border: 1px solid #f5f5f5;
  color: white;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
  outline: none;

  &::placeholder{
    color: black;
  }
  `;
const Desc = styled.textarea`
  border: 1px solid #f5f5f5;
  color: white;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: black;
  }
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: black;
  color: #f5f5f5;
  padding: 15px 0;
  width: 100%;
`;
const Label = styled.label`
  font-size: 14px;
`;
function UploadFile({ setOpen }) {

  const [inputs, setInputs] = useState({});
  const [videoPerc, setVideoPerc] = useState(0);
  const [video, setVideo] = useState(undefined);
  

  
  useEffect(() => {
      const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log(`Upload is running`);
            break;
          default:
            break;
        }
      },
      (error) => {console.log(error)}, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
    };

    video && uploadFile(video, "videoUrl");
  }, [video]);

  
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleBtn = async (e) => {
    e.preventDefault();
    await axios.post('/video', inputs);
    setOpen(false);
    // console.log(res.data)

  }

  
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload new video from here</Title>
        <Label>Video : </Label>
        {videoPerc > 0 ? (
          <p style={{color:'white', fontSize:'28px'}}>{`uploading ${videoPerc} %`}</p>
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <Desc
          placeholder="Description"
          name="desc"
          rows={8}
          onChange={handleChange}
        />
       {videoPerc < 100 ? (<p style={{color:'white', fontSize:'20px', textAlign:'center'}}>first upload the video sir :)</p>) : (<Button  onClick={handleBtn}>
          Upload
        </Button>)}
      </Wrapper>
    </Container>
  );
}

export default UploadFile