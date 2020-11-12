<template>
  <div class="title-container" data-aos="title-active" data-aos-once="true">
    <div class="icon-container">
      <IconHexagone
        class="primary--text icon outlined"
        height="120"
        width="120"
        :gradient="true"
      />
      <IconHexagone
        class="accent--text icon filled"
        height="120"
        width="120"
        :fill="true"
      />
    </div>
    <div class="title-wrapper">
      <div class="title text-h3 font-weight-bold mb-3">
        <slot />
      </div>
      <div class="primary bottom-bar" style="height: 0.4rem"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-container {
  position: relative;
  .title-wrapper {
    z-index: 1;
    position: relative;
  }
  .icon-container {
    position: absolute;
    right: -120px;
    top: 50%;
    transform: translateY(-60%);
    .icon {
      transition: all 0.8s ease-in-out;
      &.filled {
        position: absolute;
        left: 20px;
        bottom: -30px;
      }
      &.outlined {
        margin-left: -20px;
        margin-top: -30px;
      }
    }
  }
  .bottom-bar {
    transition: width 0.8s ease-in-out;
    width: 0;
  }
  &.aos-animate {
    .bottom-bar {
      width: 70%;
      max-width: 200px;
    }
    .icon {
      transition: all 0.8s ease-in-out;
      &.filled {
        position: absolute;
        left: -20px;
        bottom: 30px;
      }
      &.outlined {
        margin-left: 20px;
        margin-top: 30px;
      }
    }
  }
}
</style>
