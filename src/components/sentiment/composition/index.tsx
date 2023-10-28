import { SentimentFaceDescription } from "./SentimentFaceDescription"
import { SentimentFaceImage } from "./SentimentFaceImage"
import { SentimentRoot } from "./SentimentRoot"
import { SentimentRootFace } from "./SentimentRootFace"
import { SentimentRootFaces } from "./SentimentRootFaces"
import { SentimentTitle } from "./SentimentTitle"

export const Sentiment = {
  Root: SentimentRoot,
  Title: SentimentTitle,
  RootFaces: SentimentRootFaces,
  RootFace: SentimentRootFace,
  FaceImage: SentimentFaceImage,
  FaceDescription: SentimentFaceDescription,
}
