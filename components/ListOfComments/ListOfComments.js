// components/ListOfComments/ListOfComments.js

import styled from "styled-components";

/* Styling */
const Comment = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 700;
  padding: 0 5px;
`;

const Timestamp = styled.p`
  font-size: 0.9rem;
  line-height: 1.1;
  padding: 0 5px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 4px;
  font-size: 0.9rem;
`;
const ListItem = styled.li`
  background: #defafb;
  margin: 0;
  &:nth-child(odd) {
    background: #f3f3f3;
  }
`;

export default function ListOfComments({ slug, comments }) {
  const matchingComments = [];

  // zum Bild gehörende Kommentare im object 'comments' anhand von 'slug' ins array 'matchingComments' speichern.
  for (const comment of comments) {
    if (comment.slug === slug) {
      matchingComments.push(comment);
    }
  }

  // Wenn Kommentare vorhanden sind Flag 'hasComments' auf true setzen
  const hasComments = matchingComments.length > 0;

  // Console.logs
  console.log("slug: ", slug);
  console.log("comments: ", comments);
  console.log("comments.length: ", comments.length);
  console.log("matchingComments: ", matchingComments);

  return (
    <List>
      {!hasComments && (
        <ListItem>There are no comments for the image yet.</ListItem>
      )}

      {hasComments &&
        matchingComments.map((comment) => (
          <ListItem key={comment.id}>
            <Comment>"{comment.comment}"</Comment>{" "}
            <Timestamp>({comment.timestamp})</Timestamp>
          </ListItem>
        ))}
    </List>
  );
}
