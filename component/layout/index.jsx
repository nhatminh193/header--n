import HeaderPage from "../header";
import React from "react";


export default function Layout({children})  {
    return (
      <>
       <HeaderPage />  
       <main>{children}</main>
      </>
    );
  }