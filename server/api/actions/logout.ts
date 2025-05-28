export default defineEventHandler(async (event) => {
  const querieObjects = getQuery(event);
  const revokeToken = querieObjects.revokeToken?.toString() ?? "false";
  const callbackUrl = querieObjects.callbackUrl?.toString() ?? "/";
  await signOut(event, revokeToken.toLowerCase() === "true", callbackUrl);
});
