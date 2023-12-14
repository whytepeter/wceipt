import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLUListElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
