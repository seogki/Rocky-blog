export const FadeMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: "tween" }
};

export const ContentsPopupMotion = {
  initial: { opacity: 0, translateX: "20px" },
  animate: { opacity: 1, translateX: "0%" },
  exit: { opacity: 0, translateX: "20px" }
};

export const EnterFromLeftMotion = {
  initial: { translateX: "-100%" },
  animate: { translateX: "0" },
  exit: { translateX: "-100%" },
  transition: { type: "tween" }
};

export const EnterFromBottomMotion = {
  initial: { translateY: "100%" },
  animate: { translateY: "0", transitionEnd: { y: 0 } },
  exit: { translateY: "100%" },
  transition: { type: "tween" }
};
