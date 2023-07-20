import Link from "next/link";
import { IDevice } from "@/lib/apiTypes";
import { MdDevices } from "react-icons/md";

export default async function DevicesList() {
  const devicesRes = await fetch("https://api.restful-api.dev/objects");
  const devices: IDevice[] = await devicesRes.json();

  return (
    <>
      <h1 className="text-center text-4xl">
        Devices <MdDevices className="inline-block" />
      </h1>
      <div>
        {devices.map((device) => (
          <Link
            href={`/${device.id}`}
            key={device.id}
            className="block hover:underline"
          >
            {device.name}
          </Link>
        ))}
      </div>
    </>
  );
}
