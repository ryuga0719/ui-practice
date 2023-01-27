<template>
  <div>
    <div>
      <h2>grid 2 column</h2>
      <p>grid-template-column : repeat(2, minmax(0, 1fr));</p>
      <div class="w-full grid grid-cols-2 gap-x-4">
        <div class="bg-red-300 h-[200px]"></div>
        <div class="bg-blue-300 h-[200px]"></div>
      </div>
    </div>

    <div class="mb-4">
      <h2>grid 3 column</h2>
      <p>grid-template-column : repeat(3, minmax(0, 1fr));</p>
      <div class="w-full grid grid-cols-3 gap-x-4">
        <div class="bg-red-300 h-[200px]"></div>
        <div class="bg-yellow-300 h-[200px]"></div>
        <div class="bg-blue-300 h-[200px]"></div>
      </div>
    </div>

    <h2>margin autoの挙動確認</h2>
    <div class="mb-4">
      <div class="border border-red-300">
        <div class="w-[50px] aspect-square bg-slate-500 mr-auto"></div>
      </div>
      <div class="border border-red-300">
        <div class="w-[50px] aspect-square bg-slate-500 mx-auto"></div>
      </div>
      <div class="border border-red-300">
        <div class="w-[50px] aspect-square bg-slate-500 ml-auto"></div>
      </div>
    </div>

    <h2>擬似コンテナクエリ(親要素の横幅が60remで切り替わるよう設定)</h2>
    <div class="flex flex-wrap gap-4">
      <div
        class="
          c-switcher-item
          flex-grow
          bg-red-300
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="w-[150px] aspect-square bg-black rounded-full"></div>
        <p>
          ぼく、白鳥を見るなら、ほんとうに幸になるなら、どんなことでもそれが、はっきりしません。ジョバンニもそっちを見ましたが、眼を細くしたり首をまげたりしながら、この人のお菓子をたべているのが見えるのでした。
        </p>
      </div>
      <div
        class="
          c-switcher-item
          flex-grow
          bg-yellow-300
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="w-[150px] aspect-square bg-black rounded-full"></div>
        <p>
          ぼく、白鳥を見るなら、ほんとうに幸になるなら、どんなことでもそれが、はっきりしません。ジョバンニもそっちを見ましたが、眼を細くしたり首をまげたりしながら、この人のお菓子をたべているのが見えるのでした。
        </p>
      </div>
      <div
        class="
          c-switcher-item
          flex-grow
          bg-blue-300
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="w-[150px] aspect-square bg-black rounded-full"></div>
        <p>
          ぼく、白鳥を見るなら、ほんとうに幸になるなら、どんなことでもそれが、はっきりしません。ジョバンニもそっちを見ましたが、眼を細くしたり首をまげたりしながら、この人のお菓子をたべているのが見えるのでした。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.c-switcher-item {
  --threshold: 60rem; // 親要素の横幅が何pxでレイアウトを切り替えて欲しいか？
  flex-basis: calc((var(--threshold) - 100%) * 999);
}
</style>
