export async function handlePostSubmit(FormData: FormData) {
  "use server";
  let postTitle = FormData.get("form-title");
  let postContent = FormData.get("post-form-content");
  let post = { title: postTitle, content: postContent };
  return post;
  //TODO: Put post in database & retrieve
}

export default function postCreateForm() {
  return (
    <div>
      <form>
        <input type="text" name="form-title" placeholder="Title" />
        <input type="text" name="post-form-content" placeholder="Content" />
        <button type="submit" formAction={handlePostSubmit}>
          Create Post
        </button>
      </form>
    </div>
  );
}
