<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  //点击遮罩 是否可关闭
  maskClosable: {
    type: Boolean,
    default: true,
  },
  //显示操作菜单
  show: {
    type: Boolean,
    default: false,
  },
  //是否需要取消按钮
  isCancel: {
    type: Boolean,
    default: false,
  },
});
const close = () => {
  handleClickCancel();
};
const handleClickMask = () => {
  if (!props.maskClosable) return;
  handleClickCancel();
};

const handleClickItem = (e: any) => {
  if (!props.show) return;
  const dataset = e.currentTarget.dataset;
  emits("click", {
    index: dataset.index,
  });
};

const emits = defineEmits(["cancel", "click"]);
const handleClickCancel = () => {
  console.log("click mask");
  emits("cancel");
};
</script>

<template>
  <div class="actionsheet-wrap">
    <div
      class="actionsheet-class actionsheet"
      :class="[show ? 'actionsheet-show' : '']"
    >
      <div class="header">
        <div class="title">{{ title }}</div>
      </div>
      <div class="content">
        <slot name="content"> </slot>
      </div>
      <div class="footer">btns</div>
    </div>
    <div
      class="actionsheet-mask"
      :class="[show ? 'mask-show' : '']"
      @click="handleClickMask"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.actionsheet-wrap {
  .actionsheet {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80vh;
    padding: 2rem 0.5rem;
    padding-top: 4.5rem;
    min-height: 100rpx;
    background: #fff;
    background: #fff;
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
    transform-origin: center;
    transition: all 0.3s ease-in-out;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    z-index: 9999;
    .header {
      position: absolute;
      top: 0;
      left: 50%;
      padding: 1.5rem;
      text-align: center;
      font-weight: 500;
      color: #1a1a1a;
      transform: translate(-50%);
      .title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #000;
        text-align: center;
      }
      .close {
        width: 44rpx;
        height: 44rpx;
        .close-img {
          width: 44rpx;
          height: 44rpx;
        }
      }
    }
    .content {
      height: 100%;
      padding-right: 1rem;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-track {
        background-color: #efefef;
        opacity: 0.1;
        border-radius: 8px;
      }
      &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px $theme-color;
        border-radius: 6px;
      }
    }
    .footer {
      width: 100%;
      height: 2rem;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .actionsheet-show {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  .tips {
    width: 100%;
    padding: 30rpx 60rpx;
    box-sizing: border-box;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .operate-box {
    padding-bottom: 12rpx;
  }
  .actionsheet-btn {
    width: 100%;
    height: 100rpx;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 36rpx;
    position: relative;
  }
  .btn-last {
    padding-bottom: env(safe-area-inset-bottom);
  }
  .actionsheet-divider::before {
    content: "";
    width: 100%;
    border-top: 1rpx solid #d9d9d9;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .actionsheet-cancel {
    color: #1a1a1a;
    padding-bottom: env(safe-area-inset-bottom);
  }
  .actionsheet-hover {
    background: #f7f7f9;
  }
  .actionsheet-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9996;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
  .mask-show {
    opacity: 1;
    visibility: visible;
  }
}
</style>
