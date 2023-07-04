<template>
  <div>
    <svg-icon icon-class="github" @click="goto" />
  </div>
</template>

<script>
export default {
  name: "fx67llGit",
  data() {
    return {
      url: "https://github.com/fx67ll",
    };
  },
  methods: {
    goto() {
      window.open(this.url);
    },
  },
};
</script>
