import * as z from "zod";

export const defaultFromType = z.object({
  gaa: z.coerce
    .number()
    .min(0, "Please provide positive score")
    .max(100, "GAA score cannot be more than 100"),
  quiz1: z.coerce
    .number()
    .min(0, "Please provide positive score")
    .max(100, "Quiz-1 score cannot be more than 100"),
  quiz2: z.coerce
    .number()
    .min(0, "Please provide positive score")
    .max(100, "Quiz-2 score cannot be more than 100"),
  finalQuiz: z.coerce
    .number()
    .min(0, "Please provide positive score")
    .max(100, "Quiz-1 score cannot be more than 100"),
  bonus: z.optional(
    z.coerce
      .number()
      .min(0, "Bonus score cannot be less then zero")
      .max(5, "Bonus score cannot be more than 5")
  ),
});
