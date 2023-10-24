import * as zod from "zod"
import { TweetSchema } from "../tweet-validation"

export type TweetData = zod.infer<typeof TweetSchema>
