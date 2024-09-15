"use client";

import { KakaoMap } from "@/app/component/KakaoMap";

export const Home = () => {
  const { latitude, longitude } = WEDDING_LAT_LNG;

  return (
    <div>
      <KakaoMap latitude={latitude} longitude={longitude} />
    </div>
  );
};

const WEDDING_LAT_LNG = {
  latitude: 37.56478529892608,
  longitude: 126.99571585373361,
};
