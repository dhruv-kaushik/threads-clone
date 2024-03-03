'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


// example create data
export async function handlePostSubmit(formData: FormData) {
    const PostContent = formData.get("post-form-content");
    const record = await pb.collection('posts').create({content: PostContent});
    revalidatePath('/', 'page')
    redirect('/')
    return {PostContent}
}