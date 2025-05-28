<script setup lang="ts">
import { CreateLightAuthClient } from "@light-auth/nuxt/client";
import type { LightAuthSession } from "@light-auth/core";
const { useSession, useUser } = CreateLightAuthClient();

const { data: session, refresh, status, pending, error } = useSession();
const { data: user, refresh: refreshUser } = useUser();

const handleGetSession = async () => {
  try {
    refresh();
    refreshUser();
    console.log("Session:", session);
  } catch (e: any) {
    console.log(e.message || "Failed to retrieve session from client side.");
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col container mx-auto p-8 max-w-4xl">
    <h1 class="text-3xl font-bold mb-6">Authentication Test Page</h1>

    <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 class="text-xl font-semibold mb-4">Login Status</h2>
      <div class="flex flex-col gap-2 my-6 w-full place-self-center">
        <UButton
          id="btnRefresh"
          icon="i-lucide-log-in"
          variant="outline"
          color="neutral"
          size="xl"
          class="w-full"
          @click="handleGetSession"
        >
          Refresh Session from client side (take a look at the console)
        </UButton>
      </div>
      <div v-if="session" class="space-y-4">
        <div class="p-4 bg-green-50 text-green-700 rounded-md">
          <p class="font-medium">✅ You are logged in !</p>
        </div>

        <div class="space-y-2">
          <h3 class="font-medium">Session:</h3>
          <div class="bg-gray-50 p-4 rounded-md">
            <pre class="whitespace-pre-wrap text-sm break-all">{{
              JSON.stringify(session, null, 2)
            }}</pre>
          </div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium">User:</h3>
          <div class="bg-gray-50 p-4 rounded-md">
            <pre class="whitespace-pre-wrap text-sm break-all">{{
              JSON.stringify(user, null, 2)
            }}</pre>
          </div>
        </div>
      </div>
      <div v-else class="space-y-4">
        <div class="p-4 bg-yellow-50 text-yellow-700 rounded-md">
          <p class="font-medium">⚠️ You are not logged in</p>
        </div>

        <div class="mt-4">
          <a
            href="/login"
            class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Login Page
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
