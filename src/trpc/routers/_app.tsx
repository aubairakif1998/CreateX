import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  createAI: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      if (!input.text) {
        return { result: "No input provided" };
      }

      // Your actual logic here
      const processedText = `AI processed: ${input.text}`;

      return { result: processedText }; // ✅ MUST return something
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
