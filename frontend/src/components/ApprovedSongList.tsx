"use client";

import * as React from "react";
import StatusBar from "./StatusBar";
import  TopNavBar from "./TopNavBar";
import  ActionButtons  from "./ActionButtons";
import { SongList } from "./ApprovedSongList/SongList";

const ApprovedSongList: React.FC = () => {

  return (
    <main className="flex flex-col mx-auto w-full bg-cyan-500 max-w-[480px]">
      <StatusBar />
      <TopNavBar
        title="Approved Song List"
      />
        <ActionButtons />
            
      <SongList />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0749e82f73615b66aaa6386625332b7e55f40aa4d66e30759ebcc7d1107d5656?placeholderIfAbsent=true&apiKey=a226a7c559bc4551b65dd4e277a7ef1c"
        alt="Bottom decoration"
        className="object-contain z-10 w-full aspect-[6.13] mt-[661px]"
      />
    </main>
  );
};

export default ApprovedSongList;
