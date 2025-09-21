import { Suspense, lazy } from "react";

const IndexComponent = lazy(() => import("@/components/index.component"));

export default function Home() {
  return (
    <Suspense>
      <IndexComponent />
    </Suspense>
  );
}
