export default defineEventHandler(async (event) => {
  const querieObjects = getQuery(event);
  const providerName = querieObjects.providerName?.toString() ?? "google";
  const callbackUrl = querieObjects.callbackUrl?.toString() ?? "/";

  await signIn(event, providerName, callbackUrl);
});
