import { Box, Rating } from "@mui/material";
import StarIcon from "@/assets/svgs/star.svg";
import OutlinedStarIcon from "@/assets/svgs/outlinedStar.svg";

export default function CustomizedRating() {
  return (
    <Rating
      value={4}
      readOnly
      precision={1.0}
      icon={<StarIcon />}
      emptyIcon={<OutlinedStarIcon />}
    />
  );
}
