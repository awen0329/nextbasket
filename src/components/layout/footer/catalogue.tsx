import Link from "@/components/base/Link";
import { Box, Typography } from "@mui/material";

interface CatalogueProps {
  label: string;
  content: string[];
}

export default function Catalogue({ label, content }: CatalogueProps) {
  return (
    <footer>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="20px"
      >
        <Typography variant="h5">{label}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="10px"
        >
          {content.map((text) => (
            <Link
              key={text}
              href="/"
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                "&:hover ": { color: "primary.main" },
              }}
            >
              {text}
            </Link>
          ))}
        </Box>
      </Box>
    </footer>
  );
}
