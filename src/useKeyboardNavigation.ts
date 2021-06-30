import { useEffect } from "react";

interface IUseKeyboardNavigation {
  onEnter?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  onReturn?: () => void;
}

function useKeyboardNavigation(navigationMethods: IUseKeyboardNavigation) {
  return useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const { onEnter, onLeft, onRight } = navigationMethods;
      const { key } = event;

      switch (key) {
        case "ArrowLeft":
          onLeft?.();
          break;
        case "ArrowRight":
          onRight?.();
          break;
        case "Enter":
          onEnter?.();
          break;
        default:
          break;
      }
    }
    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [navigationMethods]);
}

export default useKeyboardNavigation;
