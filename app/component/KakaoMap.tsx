import React, { useEffect } from "react";

interface Props {
  latitude: number;
  longitude: number;
  level?: number;
}

export const KakaoMap = ({ latitude, longitude, level = 4 }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=74b55de854bb19ae1ae2384499608a89&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById(MAP_ID);
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: level,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude,
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [latitude, longitude, level]);

  return <div id={MAP_ID} className="w-full aspect-square" />;
};

const MAP_ID = "kakao_map";
