<template>
  <view class="mine-container" :style="{ height: `${windowHeight}px` }">
    <!--顶部个人信息栏-->
    <view class="header-section">
      <view class="flex padding justify-between">
        <view class="flex align-center">
          <view v-if="!avatar" class="cu-avatar xl round bg-white">
            <view class="iconfont icon-people text-gray icon"></view>
          </view>
          <image
            v-if="avatar"
            @click="handleToAvatar"
            :src="avatar"
            class="cu-avatar xl round"
            mode="widthFix"
          >
          </image>
          <view v-if="!name" @click="handleToLogin" class="login-tip"> 点击登录 </view>
          <view v-if="name" @click="handleToInfo" class="user-info">
            <view class="u_title"> {{ name }} </view>
          </view>
        </view>
        <view @click="handleToInfo" class="flex align-center">
          <text>个人信息</text>
          <view class="iconfont icon-right"></view>
        </view>
      </view>
    </view>

    <view class="content-section">
      <view class="mine-actions grid col-4 text-center">
        <view class="action-item" @click="goFx67ll(0)">
          <view><uni-icons color="#2ecc71" type="star" size="32"></uni-icons></view>
          <text class="text">{{ globalConfig.appInfo.author_info[0].title }}</text>
        </view>
        <view class="action-item" @click="goFx67ll(1)">
          <view><uni-icons color="#2ecc71" type="medal" size="32"></uni-icons></view>
          <text class="text">{{ globalConfig.appInfo.author_info[1].title }}</text>
        </view>
        <view class="action-item" @click="goFx67ll(2)">
          <view><uni-icons color="#2ecc71" type="fire" size="32"></uni-icons></view>
          <text class="text">{{ globalConfig.appInfo.author_info[2].title }}</text>
        </view>
        <view class="action-item" @click="goFx67ll(3)">
          <view><uni-icons color="#2ecc71" type="hand-up" size="32"></uni-icons></view>
          <text class="text">{{ globalConfig.appInfo.author_info[3].title }}</text>
        </view>
      </view>

      <view class="menu-list">
        <view class="list-cell list-cell-arrow" @click="handleToEditInfo">
          <view class="menu-item-box">
            <view class="iconfont icon-user menu-icon"></view>
            <view>编辑资料</view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow" @click="handleAbout">
          <view class="menu-item-box">
            <view class="iconfont icon-aixin menu-icon"></view>
            <view>关于我们</view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow" @click="handleToSetting">
          <view class="menu-item-box">
            <view class="iconfont icon-setting menu-icon"></view>
            <view>应用设置</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import storage from "@/utils/storage";

export default {
  data() {
    return {
      name: this.$store.state.user.name,
      version: getApp().globalData.config.appInfo.version,
      globalConfig: getApp().globalData.config,
    };
  },
  computed: {
    avatar() {
      return this.$store.state.user.avatar;
    },
    windowHeight() {
      return uni.getSystemInfoSync().windowHeight - 50;
    },
  },
  methods: {
    handleToInfo() {
      this.$tab.navigateTo("/pages/mine/info/index");
    },
    handleToEditInfo() {
      this.$tab.navigateTo("/pages/mine/info/edit");
    },
    handleToSetting() {
      this.$tab.navigateTo("/pages/mine/setting/index");
    },
    handleToLogin() {
      this.$tab.reLaunch("/pages/login");
    },
    handleToAvatar() {
      this.$tab.navigateTo("/pages/mine/avatar/index");
    },
    handleLogout() {
      this.$modal.confirm("确定注销并退出系统吗？").then(() => {
        this.$store.dispatch("LogOut").then(() => {
          this.$tab.reLaunch("/pages/index");
        });
      });
    },
    handleAbout() {
      this.$tab.navigateTo("/pages/mine/about/index");
    },
    goFx67ll(index) {
      let site = this.globalConfig.appInfo.author_info[index];
      this.$tab.navigateTo(
        `/pages/common/webview/index?title=${site.title}&url=${site.url}`
      );
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: #f5f6f7;
}

.mine-container {
  width: 100%;
  height: 100%;

  .header-section {
    padding: 15px 15px 45px 15px;
    background-color: #2ecc71;
    color: white;

    .login-tip {
      font-size: 18px;
      margin-left: 10px;
    }

    .cu-avatar {
      border: 2px solid #eaeaea;

      .icon {
        font-size: 40px;
      }
    }

    .user-info {
      margin-left: 15px;

      .u_title {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }

  .content-section {
    position: relative;
    top: -50px;

    .mine-actions {
      margin: 15px 15px;
      padding: 20px 0px;
      border-radius: 8px;
      background-color: white;

      .action-item {
        .icon {
          font-size: 28px;
        }

        .text {
          display: block;
          font-size: 13px;
          margin: 8px 0px;
        }
      }
    }
  }
}
</style>
