<template>
  <section class="container">
    <h1>currency.ovh</h1>
    <h2>各種サービス共通 プライバシポリシー</h2>
    <div class="container">
      <p>当方で管理している下記サービスに適応されます</p>
      <ul v-for="(item, index) in services" :key="index">
        <li>
          <a :href="item.url">{{ item.name }} ({{ item.url }})</a>
        </li>
      </ul>
      <h3>Google Analytics</h3>
      <p>各種サービスでは、サイトの分析と改善のため、Googleアナリティクスを利用しています。</p>
      <p>Googleアナリティクスはアクセス解析ツールとして利用しており、データ収集にCookieを利用しています。</p>
      <p>個人を特定することはありませんが、ブラウザのCookieを無効にすることで情報収集を拒否することができます。</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: "Pools List",
          url: "https://pools.currency.ovh/"
        },
        {
          name: "Explorers List",
          url: "https://explorers.currency.ovh/"
        },
        {
          name: "BlockBook",
          url: "https://blockbook.ovh/"
        },
        {
          name: "人のプール",
          url: "https://mining.zinntikumugai.xyz/"
        }
      ]
    };
  }
};
</script>

