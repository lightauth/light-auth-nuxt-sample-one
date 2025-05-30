<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { CreateLightAuthClient } from "@light-auth/nuxt/client";

const { useUser, signOut } = CreateLightAuthClient();
const { data: user } = useUser();

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: user?.value?.name || "Guest",
      avatar: {
        src: user?.value?.picture,
      },
      type: "label",
    },
  ],

  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      onSelect: () => {
        signOut(false, "/");
      },
    },
  ],
]);
</script>

<template>
  <UDropdownMenu
    size="xl"
    :items="items"
    :ui="{
      content: 'w-64',
    }"
  >
    <UButton variant="link">
      <span>{{ user?.email }}</span>
      <UAvatar icon="i-lucide-image" size="md" :src="user?.picture" />
    </UButton>
  </UDropdownMenu>
</template>
