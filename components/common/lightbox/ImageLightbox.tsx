import FsLightbox from "fslightbox-react";
import { useState } from "react";

type ImageLightboxProps = { sources?: string[]; children: React.ReactNode };

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  sources = ["https://youtu.be/mJ3bGvy0WAY"],
  children,
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <div>
      <div onClick={() => setToggler(!toggler)} style={{ cursor: "pointer" }}>
        {children}
      </div>
      <FsLightbox toggler={toggler} sources={sources} />
    </div>
  );
};

export default ImageLightbox;
