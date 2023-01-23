<!-- WAI-ARIAのオーサリング・プラクティスに従ったアコーディオンUI -->
<template>
  <div class="border-y border-gray-600 py-4">
    <!-- 見出し部分 -->
    <h3 class="w-full">
      <button
        type="button"
        :aria-expanded="open"
        :aria-controls="contentId"
        :id="buttonId"
        @click="open = !open"
        class="w-full text-left"
      >
        <span>
          {{ heading }}
        </span>
      </button>
    </h3>
    <!-- コンテンツ部分 -->
    <div
      :id="contentId"
      role="region"
      :aria-labelledby="buttonId"
      v-show="open"
      class="pt-4 border-t border-gray-400 mt-4"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  heading?: string;
  isOpen?: boolean;
  buttonId: string;
  contentId: string;
}

const props = withDefaults(defineProps<Props>(), {
  heading: "",
  isOpen: false,
  buttonId: "",
  contentId: "",
});

// アコーディオン開閉トグル
const open = ref<boolean>(props.isOpen);
</script>

<style scoped lang="scss"></style>
