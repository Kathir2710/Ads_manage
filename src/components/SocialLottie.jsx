import Lottie from "lottie-react";
import animationData from "../lottie/social-media.json";

export default function SocialLottie() {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: "100%", maxWidth: 480 }}
    />
  );
}
