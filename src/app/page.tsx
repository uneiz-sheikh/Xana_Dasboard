'use client'

import "./style.scss";
import Header from "@/component/layout/header";
import Sidebar from "@/component/layout/sidebar";
import Chat from "@/templates/Chat";
import Dashboard from "@/templates/dashboard";
import { useState } from "react";

export default function Home() {
  const [sidebar , setSidebar]= useState<boolean>(true)

  return (
    <>
      <Header setSidebar={setSidebar}  sidebar={sidebar}  />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className={`main ${!sidebar && 'mainContentopen'}`}>   
            {/* <Dashboard/>             */}
            <Chat/>
      </div>
    
    </>
  );
}
