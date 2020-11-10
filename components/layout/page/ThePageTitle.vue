<template>
  <div class="title-container" data-aos="title-active">
    <div class="icon-container">
      <IconHexagone
        class="primary--text icon outlined"
        height="120"
        width="120"
      />
      <IconHexagone
        class="grey--text text--lighten-2 icon filled"
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

<script>
import AOS from '@/plugins/aos'
export default {
  mounted() {
    AOS.init({
      duration: 1200,
      once: true,
    })
  },
}
</script>
<style scoped lang="scss">
.title-container {
  position: relative;
  .title-wrapper {
    z-index: 1;
    position: relative;
  }
  .icon-container {
    position: absolute;
    left: 300px;
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
      width: 200px;
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
