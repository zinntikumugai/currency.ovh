<template>
  <div>
    <footer _class="fixed-bottom">
      <div class="text-center">
        <ul class="menu list-inline">
          <li class="list-inline-item">
            <a href="/">Top</a>
          </li>
          <li class="list-inline-item">
            <a href="/policy">プライバシポリシー</a>
          </li>
          <li class="list-inline-item">
            <a
              :href="`https://twitter.com/${sns.twitter}`"
              target="_blank"
              class="text-decoration-none"
            >
              <font-awesome-icon :icon="['fab', 'twitter']"/>
              @{{sns.twitter}}
            </a>
          </li>
          <li class="list-inline-item">
            <a
              target="_blank"
              class="text-decoration-none"
              href="https://github.com/zinntikumugai/currency.ovh"
            >
              <font-awesome-icon :icon="['fab', 'github']"/> Source
            </a>
          </li>
        </ul>
      </div>

      <div class="copyright">
        <p class="text-center">© Currency.ovh</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sns: {
        twitter: "CurrencyOvh"
      }
    };
  }
};
</script>

<style>
.copyright {
  color: #ffffff;
}

.copyright p {
  margin: 15px 0px;
}

footer {
  background-color: #222222;
  color: #f0f0f0;
  padding: 30px 0px;
}

footer .menu li a {
  color: #b1aca1;
  padding: 10px;
  text-decoration: none;
}

footer .menu li a:hover {
  color: #7dabdb;
}
</style>
