import { notFound } from "next/navigation";

function idExists(id: string) {
  //TODO: Add Real ID Check
  return id === "1";
}
export default function PostPage({ params }: { params: { id: string, user:string } }) {
  if (!idExists(params.id)) {
    return notFound();
  }
  return <div>THIS IS A POST {params.id} BY {params.user}</div>;
}
