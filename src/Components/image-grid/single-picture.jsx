// Styles
import { Flex } from "../../styles/globalStyles";
import {
  Image,
  SinglePictureContainer,
  Back,
  InfoCard,
  Name,
  PhotographerName,
  Avatar,
  Location,
} from "./styles";
import Chip from '@mui/material/Chip';
// import { ArrowDownwardRounded } from "@mui/icons-material";
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import Tree from './palm-tree.png'

// Assets
import images from "../../images";
import { CloseIcon } from "../../images/CustomIcons";

const handleClick = () => {
  console.info('You clicked the Chip.');
};

// animation config and variants
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const backVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: { opacity: 1, y: 0 },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
    x: "-50%",
  },
  animate: { opacity: 1, y: 0, x: "-50%" },
};

const SinglePicture = ({
  isSelected,
  setSelectedImage,
  index,
  data: { creator, location, name, variant },
}) => {
  const goBack = () => {
    setSelectedImage(-1);
  };

  return (
    <SinglePictureContainer
      isSelected={isSelected}
      layoutId={`card-container--index-${index}`}
      transition={spring}
      variant={variant}
    >
      {isSelected && (
        <Back
          onClick={goBack}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={backVariants}
        >
          <CloseIcon />
        </Back>
      )}
      <Image
        src={images[name]}
        alt={name}
        onClick={() => {
          setSelectedImage(index);
        }}
        isExpanded={isSelected}
        layoutId={`card-image--index-${index}`}
      />
      {isSelected && (
        <InfoCard
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={cardVariants}
        >
          <Location>{location}</Location>
          <Name>{name}</Name>
       
            {/* <Avatar
              image={
                !!creator.avatar
                  ? `${creator.avatar}?q=10&w=50`
                  : images.avatarFallback
              }
            /> */}
            {/* <PhotographerName>{creator.name}</PhotographerName> */}

            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>

            
            <Chip
              label="Banyan tree"
              onClick={handleClick}
              style={{background:'#829D94',color:'#fff'}}
              // onDelete={handleDelete}
              // deleteIcon={<DoneIcon />}
              icon={<ParkOutlinedIcon style={{color:'#fff'}}/>}
            />
            <Chip
              label="Banyan tree"
              onClick={handleClick}
              style={{background:'#829D94',color:'#fff'}}
              // onDelete={handleDelete}
              // deleteIcon={<DoneIcon />}
              icon={<ParkOutlinedIcon style={{color:'#fff'}}/>}
            />
            
            </div>
            
   

        </InfoCard>
      )}
    </SinglePictureContainer>
  );
};

export default SinglePicture;
