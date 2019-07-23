<template>
  <section class="container">
    <div>
      <h1 class="title">currency.ovh</h1>
      <div class="links row">
        <div class="col-4" v-for="(item, index) in services" :key="index">
          <a :href="item.url" target="_blank" class="button--green row">
            <img v-if="item.imgUrl" :src="item.imgUrl" class="col-12" />
            <p class="col-12">{{item.name}}</p>
          </a>
        </div>
      </div>
      <hr />
      <a href="https://twitter.com/uesitananame55" target="_blank" class="button--grey">
        <font-awesome-icon :icon="['fab', 'twitter']" class="c-twitter" /> uesitananame55
      </a>
      <div>© currency.ovh</div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      services: [
        {
          name: "Pools List",
          imgUrl: "/icons/list.svg",
          url: "https://pools.currency.ovh/"
        },
        {
          name: "Explorers List",
          imgUrl: "/icons/list.svg",
          url: "https://explorers.currency.ovh/"
        },
        {
          name: "BlockBook",
          imgUrl: "/icons/trzer.svg",
          url: "https://blockbook.ovh/"
        },
        {
          name: "人のプール",
          imgUrl: "/icons/pick.svg",
          url: "https://mining.zinntikumugai.xyz/"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button--green {
  display: flex;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin: 10px 5px 10px 5px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.c-twitter {
  color: #00acee;
}
</style>
