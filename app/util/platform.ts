const userAgent =
  navigator.userAgent || navigator.vendor || (window as any).opera;

const isWeb = () => !isNative();
const isNative = () => isAndroid() || isIOS();
const isAndroid = () => /android/i.test(userAgent);
const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
