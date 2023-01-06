import React, { useState } from 'react'
import styled from 'styled-components';
import UploadFile from './UploadFile';

const Nav = styled.div`
  width: 100%;
  height: 60px;
  background-color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h3`
  margin: 0 1rem;
`;
const Profile = styled.a`
  margin: 0 1rem;
  font-size: 20px;
  font-weight: 400;
  color: black;
  text-decoration: none;
  &:hover {
    color: #1f1f88;
    font-size: 22px;
  }
`;
const UploadBtn = styled.button`
  padding: 5px 10px;
  font-size: 22px;
  background-color: #ffa600cf;
  outline: none;
  border: none;

  &:hover{
    color: black;
    background-color: #ffa600;
  }
`

function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Nav>
        <Logo>RandomVideos</Logo>
        <UploadBtn onClick={()=>setOpen(true)}> Upload Video
        </UploadBtn>
        <Profile>Login/SignUp
        </Profile>
      </Nav>
      {open && <UploadFile setOpen={setOpen} />}
    </>
  );
}

export default Navbar; 