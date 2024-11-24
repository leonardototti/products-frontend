import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts.scss";
import "./globals.scss";
import { Providers } from "./providers";
import { router } from "./router";
import queryClient from "@/shared/api/query-client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers router={router} client={queryClient} />
  </StrictMode>
);
