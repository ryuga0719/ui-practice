<template>
  <div>
    <div class="flex flex-wrap mb-10">
      <div class="bg-red-300 basis-[300px] flex-grow">
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
        </ul>
      </div>
      <div class="bg-blue-300 basis-0 flex-grow-[999] min-w-[50%]">
        main contents
      </div>
    </div>

    <h2>ブログ記事レイアウトにも応用できる</h2>
    <article class="flex flex-wrap border border-black p-2 gap-4">
      <div
        class="
          bg-red-300
          basis-[300px]
          flex-grow
          h-[150px]
          flex
          items-center
          justify-center
        "
      >
        写真
      </div>
      <div class="bg-blue-300 basis-0 flex-grow-[999] min-w-[50%]">
        <p>
          ぼく、白鳥を見るなら、ほんとうに幸になるなら、どんなことでもそれが、はっきりしません。<br />ジョバンニもそっちを見ましたが、眼を細くしたり首をまげたりしながら、この人のお菓子をたべているのが見えるのでした。<br />すると空中にざあっと雨のようにうつくしくかがやいて見えました。風が遠くで鳴り、丘の草の中に小さなお魚もいるんでしょうか女の子がカムパネルラにはなしかけました。ぐあい悪くなかったのです。
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
