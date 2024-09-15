"use client";

import { WEDDING_LAT_LNG } from "@/app/util/const";
import { useKakaoNavi } from "@/app/hook/useKakaoNavi.hook";

export const Home = () => {
  const { latitude, longitude } = WEDDING_LAT_LNG;
  const { handleKakaoNavi } = useKakaoNavi();

  return (
    <div>
      {/*<KakaoMap latitude={latitude} longitude={longitude} />*/}
      <button className="w-10 h-10" onClick={handleKakaoNavi} />
    </div>
  );
};
