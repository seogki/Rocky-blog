export const FadeTweenMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: "tween" },
};

export const ScaleTweenMotion = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { type: "tween" },
};

export const EnterMotion = {
  initial: { opacity: 0, translateX: "20px" },
  animate: { opacity: 1, translateX: "0%" },
  exit: { opacity: 0, translateX: "20px" },
};
