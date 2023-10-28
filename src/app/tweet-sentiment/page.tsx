"use client"

import { Button } from "@/components/button"
import { ControllerContainer } from "@/components/controller"
import { Divider } from "@/components/divider"
import { Explanation } from "@/components/explanation"
import { Icons } from "@/components/icons"
import { Sentiment } from "@/components/sentiment/composition"
import { NegativeFace } from "@/components/svg/negative"
import { NeutralFace } from "@/components/svg/neutral"
import { PositiveFace } from "@/components/svg/positive"
import { TextArea } from "@/components/textarea"
import { TweetSchema } from "@/lib/validations/tweet-validation"
import { TweetData } from "@/lib/validations/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const TweetSentiment = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TweetData>({
    resolver: zodResolver(TweetSchema),
    defaultValues: {
      tweet: "",
    },
  })

  const tweet = watch("tweet")
  const isDisabled = tweet.length === 0

  const handleSendTweet = (values: TweetData) => {
    console.log("values", values)
  }

  return (
    <main>
      <Explanation.Root>
        <Explanation.Description description="Identificação" />
        <Explanation.Title title="Tweet" />
        <Explanation.Subtitle subTitle="Atualizado em: 16/09/2023" />
      </Explanation.Root>
      <Divider />
      <div className="flex flex-col lg:flex-row gap-4 items-start animationToRight">
        <form
          className="flex-1 w-full"
          onSubmit={handleSubmit(handleSendTweet)}
        >
          <ControllerContainer
            control={control}
            name="tweet"
            render={({ field }) => <TextArea {...field} error={errors.tweet} />}
          />
          <Button
            disabled={isDisabled}
            aria-label="Enviar tweet"
            className="mt-4"
            type="submit"
          >
            Descobrir sentimento{" "}
            <Icons.scanFace className="h-6 w-6 text-white" />
          </Button>
        </form>
        <Sentiment.Root>
          <Sentiment.Title title="Sentimento do tweet" />
          <Sentiment.RootFaces>
            <Sentiment.RootFace className="flex flex-row gap-2 items-center">
              <Sentiment.FaceImage>
                <PositiveFace />
              </Sentiment.FaceImage>
              <Sentiment.FaceDescription title="Positivo" />
            </Sentiment.RootFace>
            <Sentiment.RootFace className="flex flex-row gap-2 items-center">
              <Sentiment.FaceImage>
                <NegativeFace />
              </Sentiment.FaceImage>
              <Sentiment.FaceDescription title="Negative" />
            </Sentiment.RootFace>
            <Sentiment.RootFace className="flex flex-row gap-2 items-center">
              <Sentiment.FaceImage>
                <NeutralFace />
              </Sentiment.FaceImage>
              <Sentiment.FaceDescription title="Neutro" />
            </Sentiment.RootFace>
          </Sentiment.RootFaces>
        </Sentiment.Root>
      </div>
    </main>
  )
}

export default TweetSentiment
