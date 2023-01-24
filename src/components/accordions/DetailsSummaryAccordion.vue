<template>
  <details
    ref="details"
    class="w-full border-y border-gray-600 py-4"
    :open="open"
  >
    <summary
      class="w-full block cursor-pointer js-summary"
      @click.prevent="clickHandler"
    >
      {{ heading }}
    </summary>

    <!-- contentにはoverflow hiddenのみ設定 -->
    <div ref="content" class="overflow-hidden">
      <!-- innerにmarginやpaddingやらを設定する -->
      <div class="mt-4 pt-4 border-t border-gray-400">
        <slot></slot>
      </div>
    </div>
  </details>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Props = {
  heading?: string;
  isOpen?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  heading: "",
  isOpen: false,
});

// アコーディオン開閉トグル
const open = ref<boolean>(props.isOpen);

// DOM
const details = ref();
const content = ref();

// アニメーション実行中の状態管理
const running = ref<boolean>(false);

// アニメーションの時間とイージング
const animTiming = {
  duration: 300,
  easing: "ease-out",
};

// アコーディオンを閉じるときのキーフレーム
const closingAnimKeyframes = (content: HTMLElement) => [
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
];

// アコーディオンを開く時のキーフレーム
const openingAnimKeyframes = (content: HTMLElement) => [
  {
    height: 0,
    opacity: 0,
  },
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
];

// アコーディオンを開く
const openAccordion = () => {
  const closingAnim = content.value.animate(
    closingAnimKeyframes(content.value),
    animTiming
  );
  running.value = true;

  // アニメーションの完了後に
  closingAnim.onfinish = () => {
    // open属性を取り除く
    open.value = false;

    running.value = false;
  };
};

// アコーディオンを閉じる
const closeAccordion = () => {
  open.value = true;

  // 開くアニメーションを実行
  const openingAnim = content.value.animate(
    openingAnimKeyframes(content.value),
    animTiming
  );
  running.value = true;

  // アニメーション完了後にアニメーション実行中用の値を取り除く
  openingAnim.onfinish = () => {
    running.value = false;
  };
};

// 見出しクリック後の処理
const clickHandler = () => {
  // 連打防止
  if (running.value) {
    return;
  }

  // アコーディオンが開いていたら閉じる
  if (open.value) {
    return openAccordion();
  }

  // アコーディオンが閉じていたら開く
  return closeAccordion();
};
</script>

<style scoped lang="scss"></style>
