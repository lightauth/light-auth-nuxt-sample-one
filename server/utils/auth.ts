import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nuxt";
import type { LightAuthProvider } from "@light-auth/core";

const config = useRuntimeConfig();

const googleProvider: LightAuthProvider = {
  providerName: "google",
  arctic: new Google(
    config.GoogleClientId,
    config.GoogleClientSecret,
    config.RedirectUri
  ),
  searchParams: new Map([["access_type", "offline"]]),
};

export const { handlers, signIn, signOut, getAuthSession, getUser } =
  CreateLightAuth({
    providers: [googleProvider],
  });
