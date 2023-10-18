import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

const Image = (props) => {
  const {
    loadingSrc,
    src,
    className,
    placeHolderStyle,
    style,
    alt = "image",
  } = props;
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("");
  const loadingImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setView(src);
        observer.unobserve(loadingImageRef.current);
      }
    });

    if (loadingImageRef && loadingImageRef.current) {
      observer.observe(loadingImageRef.current);
    }
  }, [src]);

  return (
    <>
      {loading && (
        <img
          src={loadingSrc}
          alt="loading"
          ref={loadingImageRef}
          style={placeHolderStyle}
        />
      )}
      <img
        src={view}
        alt={alt}
        className={loading ? styles.hidden : className}
        onLoad={() => setLoading(false)}
        style={style}
      />
    </>
  );
};

export default Image;
