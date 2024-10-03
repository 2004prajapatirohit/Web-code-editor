import React, { useState } from 'react'
import  Avatar from "react-avatar";
import { useLocation } from 'react-router-dom';
export default function EditorPage() {
  const location = useLocation();
    const { username } = location.state || {};
  return (
    <div>
      Editor Page
      <div class="grid grid-cols-8 gap-4">
        <div class="col-span-1 bg-green-500">Ye le tera profile
          {username&& <Avatar name={username}/>}
        </div>
        <div class="col-span-7 bg-blue-200">Ye le tera code editor</div>
      </div>
    </div>
  )
}
