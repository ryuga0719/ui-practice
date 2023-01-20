<!-- WAI-ARIAのオーサリング・プラクティスに従ったアコーディオンUI -->
<template>
  <div class="border border-red-500">
    <!-- 見出し部分 -->
    <h3 class="border border-blue-500 w-full bg-slate-400">
      <button
        type="button"
        :aria-expanded="open"
        :aria-controls="contentId"
        :id="buttonId"
        @click="open = !open"
        class="w-full"
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
  buttonId?: string;
  contentId?: string;
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
