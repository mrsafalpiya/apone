export interface IDevice {
  id: number;
  name: string;
  data: {
    [key: string]: string | number;
  } | null;
}

export interface ICRMHomepageBanner {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface ICRMResponse {
  homepage_banner: ICRMHomepageBanner[];
  mobile_homepage_banner: ICRMHomepageBanner[];
}
