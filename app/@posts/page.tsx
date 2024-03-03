import Post from '@/components/post';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function postPreview() {    
const record = await pb.collection('posts').getList();
  return (
    <div className="flex justify-center">
      <li>
        {
        record.items.map((el)=> <Post key={Math.random().toString()} username='exampleUser' createdAt={el.created} postContent={el.content}/>)
        }
        </li>
    </div>
  );
}
