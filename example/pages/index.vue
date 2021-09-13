<template>
  <main>
    <h1>Nuxt Headway</h1>
    <div v-headway v-headway-trigger>
      Changelog
      <!-- Headway will be inserted here -->
    </div>

    <div>
      <button v-headway-trigger>
        Toggle changelog
      </button>

      <button @click="resetSeenCount">
        Reset seen count
      </button>
    </div>

    <!-- <a href="#">Docs</a> -->
  </main>
</template>

<script>
export default {
  mounted() {
    console.log(this.$headway);
  },
  methods: {
    async resetSeenCount() {
      // Async safe — Promise
      await this.$headway.onReady;
      this.$headway.sync.setState({ seen: [], read: [] });
      this.$headway.sync.init();
    },
    resetSeenCountAlt() {
      // Alternative
      // Async safe — Push
      this.$headway.push(['setState', { seen: [], read: [] }]);
      this.$headway.push(['init']);
    },
    resetSeenCountUnsafe() {
      // Async unsafe / Not recommended
      this.$headway.sync.setState({ seen: [], read: [] });
      this.$headway.sync.init();
      // or
      // window.Headway.setState({ seen: [], read: [] });
      // window.Headway.sync.init();
    }
  }
};
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
  padding: 0;
  margin: 0;
}

* {
  font-family: Avenir, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

main > div:first-of-type {
  cursor: pointer;
}

main > * {
  margin: 1rem 0;
}

main,
div {
  display: flex;
  justify-content: center;
}

button {
  margin: 0 0.5rem;
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

a {
  color: #4f46e5;
  text-decoration: none;
}

a::after {
  content: '→';
  display: inline-block;
  margin-left: 4px;
  transition: all 0.2s ease;
}

a:hover::after {
  transform: rotate(-45deg);
}

.HW_badge_cont {
  margin-left: -10px;
  margin-top: -12px;
}
</style>
