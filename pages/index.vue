<template>
  <div class="container">
    <div class="center-block">
      <h1>Currency.ovh</h1>
      <p>一つの通貨に縛られないサービスを提供します</p>
    </div>
    <div class>
      <h2 class="title">Services</h2>
      <div class="row">
        <div v-for="(item, idxi) in services" :key="idxi" class="col-6 col-lg-4 text-center">
          <div class="bg-light m-2 p-2">
            <b-link :href="item.url" class="text-decoration-none text-reset">
              <img :src="item.imgUrl" class="resizeimage img-fluid w-50" />
              <hr />
              <h2 class="display-5">{{item.name}}</h2>
              <p class="lead" v-html="item.sdesc"></p>
            </b-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    conv: function() {
      let dist = [[]];
      this.services.forEach((el, idx) => {
        let tail = dist.length - 1;

        dist[tail].push(el);

        if (
          this.services.length > idx &&
          dist[tail].length > this.settings.slicePar - 1
        ) {
          dist.push([]);
        }
      });
      dist.pop();
      return dist;
    }
  },
  data() {
    return {
      settings: {
        slicePar: 2
      },
      services: [
        {
          name: "Pools List",
          imgUrl: "/icons/list.svg",
          url: "https://pools.currency.ovh/",
          sdesc: "マイニングプール 一覧",
          desc: "現在稼働中のマイニングプールの利用率が見れます。"
        },
        {
          name: "Explorers List",
          imgUrl: "/icons/list.svg",
          url: "https://explorers.currency.ovh/",
          sdesc: "エクスプローラー 一覧",
          desc: "現在稼働中のエクスプローラーの状態が見れます。"
        },
        {
          name: "Block Book",
          imgUrl: "/icons/trzer.svg",
          url: "https://blockbook.ovh/",
          sdesc: "ブロックチェーン<br>エクスプローラー",
          desc:
            "ハードウエアウォレットに対応したブロックチェーンエクスプローラーです。"
        },
        {
          name: "人のプール",
          imgUrl: "/icons/pick.svg",
          url: "https://mining.zinntikumugai.xyz/",
          sdesc: "マイニング プール",
          desc: "複数の通貨に対応したマイニングプールです。"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.resizeimage {
  width: 100%;
  height: 100%;
}
</style>
