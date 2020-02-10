import React from "react";
//import TicketList from "./TicketList";
import Header from "./Header";
inport Background from "./Background";

function App(){
  return (
    <div>
      <Header/>
      <Background>
        <div>
          <TopRow>
            <div>
              <Home/>
              <Notifications/>
              <Messages/>
              <SearchInput/>
              <Tweet/>
            </div>
          </TopRow>
          <Mainperson>
            <Picture/>
            <Name/>
            <Tweets/>
            <Following/>
            <Followers/>
          </Mainperson>
          <WhatTheySaidBox/>
          <FeedBox>
            <PostRow>
              <Picture/>
              <EnterPost/>
            </PostRow>
            <PersonPost>
              <Picture/>
              <Name/>
              <Post/>
            </PersonPost>
          </FeedBox>
          <AddBox>
            <Description/>
            <AddPerson>
              <Picture/>
              <Name/>
              <AddButton/>
            </AddPerson>
          </AddBox>
        </div>
        <Background/>
      //<TicketList/>
    </div>
  );
}

export default App;
