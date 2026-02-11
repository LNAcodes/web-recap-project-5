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
  // neues Array 'matchingComments' anlegen
  // Mit 'filter' durch alle Kommentare gehen und wenn der 'slug' übereinstimmt ins Array reinpushen
  const matchingComments = comments.filter((comment) => comment.slug === slug);

  return (
    <List>
      {matchingComments.map((comment) => (
        <ListItem key={comment.id}>
          <Comment>{comment.comment}</Comment>
          <Timestamp>({comment.timestamp})</Timestamp>
        </ListItem>
      ))}
    </List>
  );
}
