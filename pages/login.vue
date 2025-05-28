<script setup lang="ts">
import { CreateLightAuthClient } from "@light-auth/nuxt/client";
const { signIn } = CreateLightAuthClient();
</script>

<template>
  <main class="min-h-screen flex flex-col">
    <div class="flex flex-col items-center justify-center p-4">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold">Login Page</h1>
        <p class="text-gray-600">Login to your account</p>
      </div>
      <UCard>
        <template #header>
          <h2 class="text-2xl font-semibold">Login</h2>
          <h3>You can choose between 2 differents ways to log in.</h3>
        </template>
        <div>
          <div class="mt-4 flex flex-col space-y-2">
            <form action="api/actions/login" method="POST">
              <input type="hidden" name="providerName" value="google" />
              <input type="hidden" name="callbackUrl" value="/" />
              <UButton
                type="submit"
                variant="outline"
                color="neutral"
                size="xl"
                class="w-full"
                :avatar="{
                  src: 'google.svg',
                }"
              >
                Login using a POST action
              </UButton>
            </form>

            <UButton
              type="submit"
              variant="outline"
              color="neutral"
              size="xl"
              class="w-full"
              :avatar="{
                src: 'google.svg',
              }"
              @click="signIn('google', '/')"
            >
              Login using a client side action
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </main>
</template>
