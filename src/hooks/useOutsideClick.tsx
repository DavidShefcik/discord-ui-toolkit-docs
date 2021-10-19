import { useEffect, RefObject } from "react";

export default function useOutsideAlerter<T extends HTMLElement>({
  ref,
  onOutsideClick,
}: {
  ref: RefObject<T>;
  onOutsideClick(): void;
}) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
