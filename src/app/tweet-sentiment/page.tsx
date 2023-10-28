"use client"

import { Button } from "@/components/button"
import { ControllerContainer } from "@/components/controller"
import { Icons } from "@/components/icons"
import { Sentiment } from "@/components/sentiment/composition"
import { NegativeFace } from "@/components/svg/negative"
import { NeutralFace } from "@/components/svg/neutral"
import { PositiveFace } from "@/components/svg/positive"
import { TextArea } from "@/components/textarea"
import { FaceType } from "@/lib/types/face-type"
import { TweetSchema } from "@/lib/validations/tweet-validation"
import { TweetData } from "@/lib/validations/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const sentimentAPI: FaceType = "NEGATIVE"

const TweetSentiment = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TweetData>({
    resolver: zodResolver(TweetSchema),
    defaultValues: {
      tweet: "",
    },
  })

  const handleSendTweet = (values: TweetData) => {
    console.log("values", values)
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 items-start">
      <form className="flex-1 w-full" onSubmit={handleSubmit(handleSendTweet)}>
        <ControllerContainer
          control={control}
          name="tweet"
          render={({ field }) => <TextArea {...field} error={errors.tweet} />}
        />
        <Button aria-label="Enviar tweet" className="mt-4" type="submit">
          Enviar Tweet <Icons.chevronRight className="h-6 w-6 text-white" />
        </Button>
      </form>
      <Sentiment.Root>
        <Sentiment.Title title="Sentimento" />
        <Sentiment.RootFaces>
          <Sentiment.RootFace className="flex flex-row gap-2 items-center">
            <Sentiment.FaceImage>
              <PositiveFace type={sentimentAPI} />
            </Sentiment.FaceImage>
            <Sentiment.FaceDescription title="Positivo" />
          </Sentiment.RootFace>
          <Sentiment.RootFace className="flex flex-row gap-2 items-center">
            <Sentiment.FaceImage>
              <NegativeFace type={sentimentAPI} />
            </Sentiment.FaceImage>
            <Sentiment.FaceDescription title="Negative" />
          </Sentiment.RootFace>
          <Sentiment.RootFace className="flex flex-row gap-2 items-center">
            <Sentiment.FaceImage>
              <NeutralFace type={sentimentAPI} />
            </Sentiment.FaceImage>
            <Sentiment.FaceDescription title="Neutro" />
          </Sentiment.RootFace>
        </Sentiment.RootFaces>
      </Sentiment.Root>
    </div>
  )
}

export default TweetSentiment
