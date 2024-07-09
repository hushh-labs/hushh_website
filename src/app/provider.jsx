"use client";
import extendedTheme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ApiKeyProvider } from "./context/apiKeyContext";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }) {
  return <ChakraProvider theme={extendedTheme}><ApiKeyProvider><SessionProvider>{children}</SessionProvider></ApiKeyProvider></ChakraProvider>;
}
