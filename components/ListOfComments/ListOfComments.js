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

  for (const comment of comments) {
    if (comment.slug === slug) {
      matchingComments.push(comment);
    }
  }
  console.log("matchingComments: ", matchingComments);
  console.log("comments: ", comments);
  console.log("comments.length: ", comments.length);
  console.log("slug: ", slug);

  if (matchingComments.length === 0) {
    return (
      <List>
        <ListItem>There are no comments for the image ({slug}) yet.</ListItem>
      </List>
    );
  }

  return (
    <List>
      {matchingComments.map((comment) => (
        <ListItem key={comment.id}>{comment.comment}</ListItem>
      ))}
    </List>
  );
}
