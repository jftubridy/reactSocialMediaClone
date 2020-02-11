import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Messages from "./Messages";
import SearchInput from "./SearchInput";
import Tweet from "./Tweet";

function TopRow(){

  return (
    <Home/>
    <Notifications/>
    <Messages/>
    <SearchInput/>
    <Tweet/>
  );
}

export default TopRow;
