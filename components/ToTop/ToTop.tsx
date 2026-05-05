import Link from "next/link";
import Icon from "../Icon/Icon";
import toTopStyle from "./toTop.module.css";
import { useState } from "react";
import { useEffect } from "react";

const ToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <Link
      href="#top"
      className={`${toTopStyle.toTop} ${
        showScroll ? `${toTopStyle.show}` : `${toTopStyle.hidden}`
      }`}
      aria-label="Navigate to top"
    >
      <Icon icon="arrowUp" />
    </Link>
  );
};

export default ToTop;
