"use client";

import { ICRMHomepageBanner } from "@/lib/apiTypes";
import Image from "next/image";

export default function BannerSwiper(props: {
  desktop: ICRMHomepageBanner[];
}) {
  return (
    <>
      {props.desktop.map((banner) => (
        <div key={banner.id}>
          <Image
            src={banner.image}
            alt={banner.title}
            width={20}   
            height={20} 
          />
        </div>
      ))}
    </>
  );
}
