import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";
import { Params } from "@/components/libs/helpers/params.helper";
import { Suspense, lazy } from "react";

const IndexComponent = lazy(() => import("@/components/index.component"));

type SlugType = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: SlugType) {
  const slug =  (await params)?.slug
  
  return {
    title: `${NEWLYWEDS_TITLE} - To ${Params.restoreOriginalCase(slug)}`,
  }
}

export default async function Slug({ params }: SlugType) {
  const slug =  (await params).slug
    
  return (
    <Suspense>
      <IndexComponent slug={slug} />
    </Suspense>
  );
}
