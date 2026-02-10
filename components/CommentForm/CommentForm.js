// components/CommentForm/CommentForm.js

import { uid } from "uid";

export default function CommentForm({ onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newCommentObject = {
      id: uid(16),
      comment: data.comment,
    };

    onAddComment(newCommentObject);

    console.log(data.comment);

    event.target.reset(); // formular wieder in den Ausgangszustand zurück setzen
  }

  return (
    <form data-js="commentForm" onSubmit={handleSubmit}>
      {/* <form data-js={formId} onSubmit={handleSubmit}> */}
      <label htmlFor="comment">Add a comment</label>
      <input
        name="comment"
        id="comment"
        type="text"
        defaultValue=""
        maxLength="25"
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
