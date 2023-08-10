import { ICRMHomepageBanner, ICRMResponse } from '@/lib/apiTypes';
import React from 'react'
import BannerSwiper from './BannerSwiper';

const Banner = (async() => {

    const homepage = await fetch("https://api.vistaartrade.com/api/home_crm/");
    const banners = (await homepage.json()) as ICRMResponse;
    const bannerImagesDesktop = banners.homepage_banner;

    return (
        <BannerSwiper desktop={bannerImagesDesktop} />
      );



}
)  as unknown as () => JSX.Element;

export default Banner