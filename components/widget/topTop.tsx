import { TotopComponent } from "@/lib/svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToTop = () => {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <>
      <div
        className={`fixed right-[60px] hover:opacity-100 transition-all duration-200 ${
          visible ? "opacity-50 bottom-[125px]" : "opacity-0 bottom-0"
        }`}
        onClick={toTop}
      >
        <TotopComponent />
      </div>
    </>
  );
};

export default ToTop;
