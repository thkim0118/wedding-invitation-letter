import localFont from "next/font/local";

export const FONT_PRETENDARD = localFont({
  src: [
    {
      path: "./pretendard/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "./pretendard/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "./pretendard/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "./pretendard/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "./pretendard/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "./pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./pretendard/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "./pretendard/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "./pretendard/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-pretendard",
});
