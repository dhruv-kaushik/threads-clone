import { notFound } from "next/navigation";

function idExists(user: string) {
  //TODO: Add Real ID Check
  return true
}
export default function PostPage({ params }: { params: { user: string } }) {
  if (!idExists(params.user)) {
    return notFound();
  }
  return <div>I AM: {params.user}, THIS IS MY PROFILE </div>;
}
