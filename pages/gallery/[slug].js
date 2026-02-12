// pages/gallery/[slug].js

import { useRouter } from "next/router";
import MetaHead from "@/components/MetaHead/MetaHead";
import ArtPieceCard from "@/components/ArtPieceCard/ArtPieceCard";
import CommentForm from "@/components/CommentForm/CommentForm";
import ListOfComments from "@/components/ListOfComments/ListOfComments";
import styled from "styled-components";

/* Styling */
const Card = styled.article`
  border-radius: 12px;
  overflow: hidden;
  background: black;
  margin-top: 10px;
  padding: 24px;
`;
const Title = styled.h2`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.2;
`;

export default function ArtPieceDetailPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
  handleAddComment,
  comments,
}) {
  const router = useRouter();
  const { slug } = router.query;

  /* Finde einzelnes Bild */
  const artPiece = artPieces.find(
    (singleArtPiece) => singleArtPiece.slug === slug
  );

  if (!artPiece) return <h1>Artwork not found</h1>;

  /* Bildgröße festlegen      */
  const imageWidth = 300;
  const imageHeight = 400;

  const info = artPiecesInfo.find((info) => info.slug === slug);
  const isFavorite = info ? info.isFavorite : false;

  let hasComments = false;
  if (comments.filter((comment) => comment.slug === slug).length != 0) {
    hasComments = true;
  }

  return (
    <>
      <MetaHead
        title="ArtPiece Title | Art Gallery"
        description="ArtPiece Title from Artist"
      />
      <main>
        <ArtPieceCard
          artPiece={artPiece}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          showDetails={true}
          slug={slug}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <Card>
          <Title>{hasComments ? "Comments:" : "No comments yet."}</Title>
          <ListOfComments slug={slug} comments={comments} />
        </Card>
        <Card>
          <CommentForm onAddComment={handleAddComment} slug={slug} />
        </Card>
      </main>
    </>
  );
}
