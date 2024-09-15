import { WEDDING_LAT_LNG } from "@/app/util/const";

export const useKakaoNavi = () => {
  const handleKakaoNavi = () => {
    const { latitude, longitude } = WEDDING_LAT_LNG;

    // 카카오내비 앱이 없을 경우 스토어로 리디렉션
    setTimeout(() => {
      if (isWeb()) {
        confirm("모바일에서 확인 가능합니다");
        return;
      }

      // TODO 모바일 환경에서 잘 동작하는지 확인.
      window.location.href = isAndroid()
        ? "https://play.google.com/store/apps/details?id=com.locnall.KimGiSa"
        : "https://apps.apple.com/kr/app/id417698849";
    }, 0); // TODO 테스트 후 setTimeout 필요한지 확인, 시간초 확인

    // 카카오내비 앱 실행
    window.location.href = KAKAO_NAVI_URL(latitude, longitude);
  };

  return { handleKakaoNavi };
};

const KAKAO_NAVI_URL = (latitude: number, longitude: number) =>
  `kakaonavi://navigate?name=${encodeURIComponent(DESTINATION)}&x=${longitude}&y=${latitude}&coord_type=${COORD_TYPE}`;

const DESTINATION = "PJ호텔 웨딩홀";
const COORD_TYPE = "wgs84";
