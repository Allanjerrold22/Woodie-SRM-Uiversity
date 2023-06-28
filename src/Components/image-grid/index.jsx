import { useState, useEffect } from "react";

// External
import { layoutId } from "framer-motion";
import { useLockBodyScroll } from "react-use";

// Components
import SinglePicture from "./single-picture";

// Styles
import { Grid } from "./styles";

// Data
import data from "../../data.json";

const ImageGrid = ({ selectedImage, setSelectedImage }) => {
  // helps in preventing the body from scrolling
  const [isScrollLocked, setScrollLocked] = useState(false);
  useLockBodyScroll(isScrollLocked);

  useEffect(() => {
    if (selectedImage !== -1) {
      setScrollLocked(true);
    } else {
      setScrollLocked(false);
    }
  }, [selectedImage]);

  return (
    <layoutId>
      <Grid>
        {data.images.map((data, index) => (
          <SinglePicture
            key={`${data.name}-${index}`}
            isSelected={selectedImage === index}
            index={index}
            setSelectedImage={setSelectedImage}
            data={data}
          />
        ))}
      </Grid>
    </layoutId>
  );
};

export default ImageGrid;
