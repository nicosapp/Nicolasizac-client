<template>
  <div
    class="section-title d-flex justify-center"
    data-aos="section-title"
    data-aos-once="true"
  >
    <div style="position: relative">
      <IconHexagone
        class="accent--text icon filled"
        height="90"
        width="90"
        style="position: absolute; top: -2rem; left: -3rem"
        :fill="true"
      />
      <div
        class="title text-h3 font-weight-bold mb-3"
        style="position: relative; z-index: 1"
      >
        <slot />
      </div>
      <div
        class="primary bottom-bar"
        style="
          height: 0.4rem;
          max-width: 150px;
          margin: auto;
          position: relative;
          z-index: 1;
        "
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon {
  transition: all 1s ease-in-out;
  opacity: 0;
  transform: rotate(180deg) scale(0);
}
.section-title.aos-animate .icon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
</style>
