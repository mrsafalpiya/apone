import { IDevice } from "@/lib/apiTypes";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default async function DeviceDetails(props: { id: number }) {
  const deviceRes = await fetch(
    `https://api.restful-api.dev/objects/${props.id}`,
  );
  const device: IDevice = await deviceRes.json();

  return (
    <main>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Link href=".">
            <MdArrowBack size={30} />
          </Link>
          <h1 className="text-center text-4xl">{device.name}</h1>
        </div>
        <div>
          {device.data ? (
            Object.entries(device.data).map(([key, value], i) => (
              <p className="capitalize" key={i}>
                <span className="font-bold">{key}</span>: {value}
              </p>
            ))
          ) : (
            <p>No information available</p>
          )}
        </div>
      </div>
    </main>
  );
}
