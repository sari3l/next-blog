import Image from "next/image";
import { useState } from "react";

export interface BlurImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  base64?: string;
  width?: number;
  height?: number;
  className?: string;
}

const emptyImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const BlurImage: React.FC<BlurImageProps> = (props) => {
  const [blur, setBlur] = useState(true);
  let src = props.src;

  if (!src) {
    src = emptyImage;
  }

  return (
    <Image
      {...props}
      src={src}
      key={this}
      placeholder="blur"
      loading="lazy"
      blurDataURL={props.base64 ?? emptyImage}
      className={
        blur
          ? "img-blur"
          : `unblur object-cove ${
              props.className ? props.className : "rounded-[10px] bg-parent"
            }`
      }
      onLoadingComplete={() => setBlur(false)}
    />
  );
};

export default BlurImage;
