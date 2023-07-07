<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string,
  href: string,
  blank?: boolean,
  primary?: boolean,
}>(), {
  icon: undefined,
  blank: false,
  primary: false,
});
</script>

<template>
  <ButtonLink :icon="icon" style="margin-right: 0.5rem" :class="{ primary }" :href="href" :blank="blank">
    <slot />
  </ButtonLink>
</template>

<style scoped lang="ts">
css({
  ".button-link": {
    position: "relative",
    borderRadius: "{radii.md}",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "var(--elements-border-primary-static)",
    color: "var(--elements-text-primary-color-static)",
    cursor: "pointer",
    background: "var(--elements-backdrop-background)",
    backdropFilter: "var(--elements-backdrop-filter)",
    transitionProperty: "box-shadow, background-color, transform",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
    "&.primary": {
      background: "linear-gradient(var(--elements-backdrop-background), var(--elements-backdrop-background)) padding-box, linear-gradient(to right, var(--docus-loadingBar-gradientColorStop1) 0, var(--docus-loadingBar-gradientColorStop2) 50%, var(--docus-loadingBar-gradientColorStop3) 100%) border-box",
      border: "1px solid transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.05)",
      boxShadow: "0px 0px 6px 0px var(--docus-loadingBar-gradientColorStop3)",
    },
  },
});
</style>
