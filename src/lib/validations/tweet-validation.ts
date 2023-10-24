import * as zod from "zod"

export const TweetSchema = zod.object({
  tweet: zod.string().min(1, { message: "Campo obrigatório" }),
})
