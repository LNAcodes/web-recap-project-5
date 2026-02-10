// components/CommentForm/CommentForm.js

import { uid } from "uid";

export default function CommentForm({ onAddComment, slug }) {
  console.log("slug: ", slug);
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Zeitstempel erzeugen
    const dateTime = new Date();
    let day = dateTime.getDate();
    day = day.toString().padStart(2, "0");
    let month = dateTime.getMonth() + 1;
    month = month.toString().padStart(2, "0");
    const year = dateTime.getFullYear();
    let hours = dateTime.getHours();
    hours = hours.toString().padStart(2, "0");
    let minutes = dateTime.getMinutes();
    minutes = minutes.toString().padStart(2, "0");
    let seconds = dateTime.getSeconds();
    seconds = seconds.toString().padStart(2, "0");
    const timeStamp = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    console.log("timestamp: ", timeStamp);

    // Neuen Kommentar als object mit id, slug, comment und timestamp speichern
    const newCommentObject = {
      id: uid(16),
      slug: slug,
      comment: data.comment,
      timestamp: timeStamp,
    };
    // und an die Funktion 'onAddComment" übergeben
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
        maxLength="50"
        required
      />
      {/* <input name="slug" id="slug" type="hidden" defaultValue={slug} /> */}

      <button type="submit">Send</button>
    </form>
  );
}
