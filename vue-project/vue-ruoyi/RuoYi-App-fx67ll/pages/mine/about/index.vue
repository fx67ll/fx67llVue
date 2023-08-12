<template>
  <view class="about-container">
    <view class="header-section text-center">
      <image
        style="width: 250rpx; height: 250rpx; margin-bottom: 20rpx"
        :src="globalConfig.appInfo.logo"
        mode="widthFix"
      >
      </image>
      <uni-title type="h1" title="fx67ll's Life App" @click="goFx67ll"></uni-title>
    </view>

    <view class="content-section">
      <view class="menu-list">
        <view class="list-cell list-cell-arrow">
          <view class="menu-item-box">
            <view>版本信息</view>
            <view class="text-right"
              ><uni-link :href="siteUrl" :text="version" showUnderLine="false"></uni-link
            ></view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow">
          <view class="menu-item-box">
            <view>技术博客</view>
            <view class="text-right">
              <uni-link :href="blogUrl" :text="blogUrl" showUnderLine="false"></uni-link>
            </view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow">
          <view class="menu-item-box">
            <view>{{ globalConfig.appInfo.author_info[5].title }}</view>
            <view class="text-right">
              <uni-link
                :href="globalConfig.appInfo.author_info[5].url"
                :text="globalConfig.appInfo.author_info[5].url"
                showUnderLine="false"
              ></uni-link>
            </view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow">
          <view class="menu-item-box">
            <view>{{ globalConfig.appInfo.author_info[4].title }}</view>
            <view class="text-right">
              <uni-link
                :href="globalConfig.appInfo.author_info[4].url"
                :text="globalConfig.appInfo.author_info[4].url"
                showUnderLine="false"
              ></uni-link>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="copyright">
      <view>Copyright &copy; {{ nowYear }} fx67ll.com All Rights Reserved.</view>
    </view>
  </view>
</template>

<script>
// 日期时间处理
import moment from "@/node_modules/moment";
import "@/node_modules/moment/locale/zh-cn";

export default {
  onLoad() {
    // moment初始汉化
    moment.locale("zh-cn");
  },
  data() {
    return {
      globalConfig: getApp().globalData.config,
      nowYear: moment().format("YYYY"),
      version: getApp().globalData.config.appInfo.version,
      siteUrl: getApp().globalData.config.appInfo.site_url,
      blogUrl: getApp().globalData.config.appInfo.blog_url,
    };
  },
  methods: {
    goFx67ll() {
      let site = this.globalConfig.appInfo.site_url;
      this.$tab.navigateTo(
        `/pages/common/webview/index?title=${site.title}&url=${site.url}`
      );
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: #f8f8f8;
}

.copyright {
  margin-top: 50rpx;
  text-align: center;
  line-height: 60rpx;
  color: #999;
}

.header-section {
  display: flex;
  padding: 30rpx 0 0;
  flex-direction: column;
  align-items: center;
}
</style>
