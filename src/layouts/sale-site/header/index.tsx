"use client";
import { SALE_SITE } from "@/constants/routes";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerSaleSite from "../drawer";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Box
        position={"fixed"}
        width={"100%"}
        left={"50%"}
        zIndex={9}
        sx={{ transform: "translate(-50%)" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgcolor={"grey.50"}
          borderRadius={6}
          m={2}
          p={2}
          position={"relative"}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <MenuIcon
              sx={{
                cursor: "pointer",
                color: "grey.900",
              }}
              onClick={() => setOpen(true)}
            />
            <Link
              href={SALE_SITE.HOME}
              style={{ display: "flex", alignItems: "baseline" }}
            >
              <Typography variant={"logo"}>Shares</Typography>
              <Box
                width={7}
                height={7}
                bgcolor={"primary.main"}
                borderRadius={"50%"}
              />
            </Link>
          </Box>
        </Box>
      </Box>

      {open && <DrawerSaleSite setOpen={setOpen} open={open} />}
    </Box>
  );
}
