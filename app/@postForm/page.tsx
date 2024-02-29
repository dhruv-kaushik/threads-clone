'use client'

import { useState } from "react";

// export async function handlePostSubmit(FormData: FormData) {
//   "use server";
//   let postContent = FormData.get("post-form-content");
//   let post = { id:'new_id', content: postContent };
//   return post;
//   //TODO: Put post in database & retrieve
// }
export default function postCreateForm(onFormClick: Function) {
  return (
    <div>
      <div className="flex justify-center items-center h-screen" >OMG</div>
        <div className="flex justify-center p-2 border" >
        <input type="text" name="post-form-content" placeholder="Start A thread..." className="px-3" onClick={onFormClick()}/>
        <button type="submit" disabled className="px-3">
          Post
        </button>
      </div>
    </div>
  );
}
