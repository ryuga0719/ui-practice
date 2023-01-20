<template>
  <details class="w-full bg-red-400" :open="open">
    <summary class="w-full bg-slate-500 block cursor-pointer">
      {{ heading }}
    </summary>
    <slot></slot>
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
