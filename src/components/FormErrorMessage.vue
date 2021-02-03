<template>
  <div v-show="errors[name]">
    <ul role="alert">
      <li v-for="(error, index) in errors[name]" :key="index">
        <span
          class="flex items-center font-medium tracking-wide
          text-red-500 text-xs mt-1 ml-1"
        >
          {{ error }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FormErrorMessage',
  props: ['errors', 'name'],
};
</script>

<style lang="scss">
.form-group__error {
  ul[role=alert] {
    list-style-type: none;
    color: var(--danger);
    text-align: left;
    padding-left: 0;
    padding-bottom: 3px;
    padding-top: 2px;
    font-size: .9em;
  }
  label {
    color: var(--danger);
  }
  input, textarea, select {
    border-color: var(--danger);
  }

}
</style>
