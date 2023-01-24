<template>
  <div class="root">
    <h2 class="heading">
      <slot name="heading"></slot>
    </h2>
    <p class="text">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.root {
  font-size: calc(1rem + 0.5vw); // 0.5vwがポイント
}

.heading {
  font-size: 2em;
}

.text {
  font-size: 1em;
}
</style>
