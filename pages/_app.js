// pages/_app.js

import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  const initialComments = ["Comment 1", "Comment 2", "Comment 3"];

  // STATE (FÜR COMMENTS) MIT LOCAL STORAGE (key = comments, opions = defaultValue)
  const [comments, setComments] = useLocalStorageState("comments", {
    // initial comments aus lib laden (wenn noch keine colors im local storage vorhanden )
    defaultValue: initialComments,
  });

  // ADD COMMENT
  const handleAddComment = (newComment) => {
    const updatedComments = [newComment, ...comments]; // alte Color Liste kopieren und neue Color hinzufügen
    setComments(updatedComments); // State setzen
    console.log(updatedComments); // Aktuellen State in der Conole ausgeben
  };

  console.log(comments);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} handleAddComment={handleAddComment} />
      <Navigation />
    </>
  );
}
