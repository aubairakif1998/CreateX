import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate } from "@tanstack/query-core";
import { Client } from "./client";
import { Suspense } from "react";
import { HydrationBoundary } from "@tanstack/react-query";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "antonio is a good boy" })
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
