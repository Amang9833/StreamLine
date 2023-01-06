import React from 'react'
import styled from 'styled-components';

//cards and it`s components
const Card = styled.div`
  height: 300px;
  width: 30%;
  background-color: gray;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 10px 10px 12px 4px rgba(55, 55, 55, 0.4);
  -webkit-box-shadow: 10px 10px 12px 4px rgba(55, 55, 55, 0.4);
  -moz-box-shadow: 10px 10px 12px 4px rgba(55, 55, 55, 0.4);
  
`;

const CardVideo = styled.video`
  width: 100%;
  height: 65%;
  background-color: #aaaaaa;
  border: none;
  
`;
const Img = styled.img`
  width: 50px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  margin: 10px 5px;
`
const Image = styled.div`
  height: 10px;
  width: 10%;
`
const Title = styled.h1`
  height: 15px;
  font-size: 18px;
  width: 100%;
`
const Date = styled.div`
/* background-color: black; */
text-align: right;
width: 100%;
height: 20px;
padding-right: 12px;
font-size: 17px;

`
const Descritption = styled.div`
/* background-color: white; */
width: 100%;
height: 100%;

`

const Wrapper = styled.div`
  background-color: #606060;
  height: calc(300px - 65%);
  width: 100%;
  display: flex;
  flex-direction: row;
  /* border: 2px solid red; */
`;

const Text = styled.div`
  width: 100%;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 5px 10px;
  color: white;
`


function Cards({ data }) {
    return (
      <Card>
        <CardVideo
          controls={true}
          crossorigin="anonymous"
          height={"inherit"}
          width="100%"
        >
          <source src={data.videoUrl} type="video/webm" />
          <source src={data.videoUrl} type="video/mp4" />
          Your Browser do not suport this tag
        </CardVideo>
        <Wrapper>
          <Image>
            <Img src="https://media.istockphoto.com/id/1069482804/photo/woman-wearing-blue-coat.jpg?s=612x612&w=is&k=20&c=J4RtZPNfSVMzbMN08cag4ikE2uTA6gq6Vz45wO9p3no=" />
          </Image>
          <Text>
            <Title> {data.title}</Title>
            <Date>{data.createdAt}</Date>
            <Descritption>{data.desc}</Descritption>
          </Text>
        </Wrapper>
      </Card>
    );
}

export default Cards;