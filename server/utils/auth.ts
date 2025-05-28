import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nuxt";
import type { LightAuthProvider } from "@light-auth/core";

const config = useRuntimeConfig();

console.log("config:", config);

const googleProvider: LightAuthProvider = {
  providerName: "google",
  arctic: new Google(
    config.GoogleClientId,
    config.GoogleClientSecret,
    config.RedirectUri
  ),
  searchParams: new Map([["access_type", "offline"]]),
};

console.log("googleProvider:", googleProvider.arctic);

export const { handlers, signIn, signOut, getSession, getUser } =
  CreateLightAuth({
    providers: [googleProvider],
  });
