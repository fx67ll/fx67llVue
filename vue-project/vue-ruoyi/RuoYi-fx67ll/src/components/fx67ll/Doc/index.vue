<template>
  <div>
    <svg-icon icon-class="question" @click="goto" />
  </div>
</template>

<script>
export default {
  name: "fx67llDoc",
  data() {
    return {
      url: "https://vue-ui.fx67ll.com/",
    };
  },
  methods: {
    goto() {
      window.open(this.url);
    },
  },
};
</script>
