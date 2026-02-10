// components/ListOfComments/ListOfComments.js

import styled from "styled-components";

/* Styling */
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  margin: 0;
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
            {comment.comment} {comment.timestamp}
          </ListItem>
        ))}
    </List>
  );
}
