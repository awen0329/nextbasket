import {
  Container,
  Breadcrumbs as MuiBreadCrumbs,
  Stack,
  Typography,
} from "@mui/material";
import Link from "./link";
import React from "react";

export default function BreadCrumbs({
  paths,
}: {
  paths: { label: string; href?: string }[];
}) {
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Stack spacing={2} height="44px">
        <MuiBreadCrumbs>
          {paths.map((path, index) => (
            <React.Fragment key={path.href}>
              {path.href ? (
                <Link href={path.href}>
                  <Typography
                    variant="h6"
                    lineHeight="24px"
                    letterSpacing={0.2}
                    color={
                      index === paths.length - 1 ? "text.blur" : "text.primary"
                    }
                  >
                    {path.label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  variant="h6"
                  lineHeight="24px"
                  letterSpacing={0.2}
                  color={
                    index === paths.length - 1 ? "text.blur" : "text.primary"
                  }
                >
                  {path.label}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </MuiBreadCrumbs>
      </Stack>
    </Container>
  );
}
