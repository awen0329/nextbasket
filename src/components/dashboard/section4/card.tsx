import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { Post } from "@/lib/types/post";
import ClockIcon from "@/assets/svgs/clock.svg";
import ChartIcon from "@/assets/svgs/chart.svg";
import ArrowNextIcon from "@/assets/svgs/arrowNext.svg";

export default function PostCard({ post }: { post: Post }) {
  const { imageUrl, badge, title, description, date, comment } = post;
  return (
    <Card>
      <CardActionArea sx={{ position: "relative" }}>
        <CardMedia component="img" height="300" image={imageUrl} alt={title} />
        {badge ? (
          <Box
            position="absolute"
            top="20px"
            left="30px"
            bgcolor="text.danger"
            padding="1px 10px"
            width="fit-content"
          >
            <Typography
              variant="h6"
              textTransform="uppercase"
              color="text.light"
            >
              {badge}
            </Typography>
          </Box>
        ) : null}
        <CardContent
          sx={{
            p: "25px 25px 35px 25px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Stack
            justifyContent="flex-start"
            gap="15px"
            width="100%"
            sx={{
              "& :where(span)": { fontSize: "12px", color: "text.secondary" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ "&": { color: "text.disabled" } }}
            >
              Google
            </Typography>
            <Typography variant="body1">Trending</Typography>
            <Typography variant="body1">New</Typography>
          </Stack>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Stack justifyContent="space-between" width="100%" padding="15px 0">
            <Stack sx={{ gap: "5px" }}>
              <ClockIcon />
              <Typography fontSize="12px" variant="body1">
                {post.date}
              </Typography>
            </Stack>
            <Stack sx={{ gap: "5px" }}>
              <ChartIcon />
              <Typography fontSize="12px" variant="body1">
                {`${comment} comments`}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            gap="10px"
            width="100%"
            sx={{
              cursor: "pointer",
              "&:hover :where(h6)": { color: "primary.main" },
            }}
          >
            <Typography color="text.secondary" variant="h6">
              Learn More
            </Typography>
            <ArrowNextIcon />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
