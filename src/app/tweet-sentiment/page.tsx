"use client"

import { Button } from "@/components/button"
import { ControllerContainer } from "@/components/controller"
import { Icons } from "@/components/icons"
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
    <div>
      <form onSubmit={handleSubmit(handleSendTweet)}>
        <ControllerContainer
          control={control}
          name="tweet"
          render={({ field }) => <TextArea {...field} error={errors.tweet} />}
        />
        <Button
          aria-label="Enviar tweet"
          disabled
          className="mt-4"
          type="submit"
        >
          Enviar Tweet <Icons.chevronRight className="h-6 w-6 text-white" />
        </Button>
      </form>
    </div>
  )
}

export default TweetSentiment
