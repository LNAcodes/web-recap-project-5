// components/CommentForm/CommentForm.js

import { uid } from "uid";

export default function CommentForm({ onAddComment, slug }) {
  console.log("slug: ", slug);
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newCommentObject = {
      id: uid(16),
      slug: slug,
      comment: data.comment,
    };

    onAddComment(newCommentObject);

    console.log(data.comment);

    event.target.reset(); // formular wieder in den Ausgangszustand zurück setzen
  }

  return (
    <form data-js="commentForm" onSubmit={handleSubmit}>
      <label htmlFor="comment">Add a comment</label>
      <input
        name="comment"
        id="comment"
        type="text"
        defaultValue=""
        maxLength="25"
        required
      />
      {/* <input name="slug" id="slug" type="hidden" defaultValue={slug} /> */}

      <button type="submit">Send</button>
    </form>
  );
}
