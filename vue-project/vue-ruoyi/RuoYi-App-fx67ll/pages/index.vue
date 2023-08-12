<template>
  <view class="content">
    <image class="logo" :src="globalConfig.appInfo.logo"></image>
    <view class="text-area">
      <text class="title" @click="goFx67ll">Powered & Designed By fx67ll</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      globalConfig: getApp().globalData.config,
    };
  },
  methods: {
    goFx67ll() {
      this.$tab.navigateTo(
        "/pages/common/webview/index?title=fx67ll.com&url=https://fx67ll.com"
      );
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
