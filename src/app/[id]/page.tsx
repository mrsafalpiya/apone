import { Suspense } from "react";
import DeviceDetails from "./DeviceDetails";

export default async function Page({ params }: { params: { id: number } }) {
  return (
    <main>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4">
        <Suspense fallback={<p>Loading...</p>}>
          <DeviceDetails id={params.id} />
        </Suspense>
      </div>
    </main>
  );
}
