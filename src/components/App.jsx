import React from "react";
import Header from "./Header";
import Background from "./Background";
import TopRow from "./TopRow/TopRow"

function App(){
  return (
    <div>
      <Header/>
      <Background>
        <div>
          <TopRow/>
          // <Mainperson/>
          // <WhatTheySaidBox/>
          // <FeedBox/>
          // <AddBox/>
        </div>
        <Background/>
      //<TicketList/>
    </div>
  );
}

export default App;
