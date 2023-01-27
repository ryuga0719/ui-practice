<template>
  <div :class="['c-stack flex justify-start', modeStyle]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type Props = {
  gapY?: string;
  gapX?: string;
  mode?: "col" | "row";
};

const props = withDefaults(defineProps<Props>(), {
  gapY: "0",
  gapX: "0",
  mode: "col",
});

const modeStyle = computed(() => {
  if (props.mode === "row") {
    return "flex-row";
  }
  return "flex-col";
});
</script>

<style lang="scss">
.c-stack > * + * {
  margin-top: v-bind(gapY);
  margin-left: v-bind(gapX);
}
</style>
