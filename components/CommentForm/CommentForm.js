// components/CommentForm/CommentForm.js

import { uid } from "uid";
import styled from "styled-components";

/* Styling */
const Form = styled.form`
  color: #333;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: #333;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 5px;
`;
const Hint = styled.p`
  color: #333;
  font-size: 0.7rem;
  line-height: 1;
  padding: 0 5px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  color: #333;
  padding: 05px;
  width: 100%;
`;
const Button = styled.button`
  min-width: 40px;
  min-height: 40px;
`;

export default function CommentForm({ onAddComment, slug }) {
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
    console.log("dateTime: ", dateTime);

    // Neuen Kommentar als object mit id, slug, comment und timestamp speichern
    const newCommentObject = {
      id: uid(16),
      slug: slug,
      comment: data.comment,
      timestamp: timeStamp,
    };
    // und an 'onAddComment" übergeben
    onAddComment(newCommentObject);

    event.target.reset(); // formular wieder in den Ausgangszustand zurück setzen
  }

  return (
    <Form data-js="commentForm" onSubmit={handleSubmit}>
      <Label htmlFor="comment">Add a comment:</Label>
      <Input
        name="comment"
        id="comment"
        type="text"
        defaultValue=""
        minLength="3"
        maxLength="45"
        required
        aria-describedby="comment-hint"
      />
      <Hint id="comment-hint">3–45 characters.</Hint>
      <Button type="submit" aria-label="Submit comment">
        Post comment
      </Button>
    </Form>
  );
}
