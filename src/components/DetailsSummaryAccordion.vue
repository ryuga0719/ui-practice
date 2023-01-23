<template>
  <details class="w-full border-y border-gray-600 py-4" :open="open">
    <summary class="w-full block cursor-pointer">
      {{ heading }}
    </summary>

    <div class="pt-4 border-t border-gray-400 mt-4">
      <slot></slot>
    </div>
  </details>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  heading?: string;
  isOpen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  heading: "",
  isOpen: false,
});

// アコーディオン開閉トグル
const open = ref<boolean>(props.isOpen);
</script>

<style scoped lang="scss"></style>
