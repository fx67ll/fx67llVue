<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">401错误!</h1>
        <h2>您没有访问权限！</h2>
        <h6>对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面</h6>
      </el-col>
    </el-row>
    <el-button icon="arrow-left" class="pan-back-btn" @click="back"> 返回首页 </el-button>
  </div>
</template>

<script>
export default {
  name: "Page401",
  data() {
    return {
      errGif: errGif + "?" + +new Date(),
    };
  },
  methods: {
    back() {
      // if (this.$route.query.noGoBack) {
      //   this.$router.push({ path: "/" });
      // } else {
      //   this.$router.go(-1);
      // }
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  .pan-back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
