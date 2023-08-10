import { Suspense } from "react";
import DevicesList from "./DevicesList";
import Banner from "./public/components/Banner";

export default async function Page() {
  return (
    <main>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4">
        <Suspense fallback={<p>Its loading...</p>}>
          <Banner />
        </Suspense>
      </div>
    </main>
  );
}
