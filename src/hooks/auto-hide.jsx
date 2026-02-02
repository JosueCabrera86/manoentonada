import { useState, useEffect, useRef } from "react";

export function useAutoHideNavbar(delay = 1500) {
  const [visible, setVisible] = useState(true);
  const timer = useRef(null);
  const hovering = useRef(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const show = () => {
    if (isMobile) return;
    clearTimeout(timer.current);
    setVisible(true);
  };

  const hide = () => {
    if (isMobile) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!hovering.current) setVisible(false);
    }, delay);
  };

  const onMouseEnter = () => {
    hovering.current = true;
    show();
  };

  const onMouseLeave = () => {
    hovering.current = false;
    hide();
  };

  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      show();
      if (!hovering.current) hide();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return {
    visible: isMobile ? true : visible, // mobile siempre visible
    onMouseEnter: isMobile ? undefined : onMouseEnter,
    onMouseLeave: isMobile ? undefined : onMouseLeave,
  };
}
