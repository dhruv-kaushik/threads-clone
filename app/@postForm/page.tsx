'use client'

import Link from "next/link";
export default function PostCreateModal() {
  return (
    <div>
        <div className="flex justify-center p-2 border" >
        <Link href="?modal=true">
        <input type="text" name="post-form-content" placeholder="Start A thread..." className="px-3"/>
        </Link>
        <button type="submit" disabled className="px-3">
          Post
        </button>
      </div>
    </div>
  );
}
