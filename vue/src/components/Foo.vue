<template lang="">
  <div>
    Foo !
  </div>
</template>

<script>
export default {
  methods: {
    async getPublicFunction() {
      let tooldModule = await window.System.import('@yd/tools')
      console.log('getPublicFunction', tooldModule.publicApiFunction(this))
    },
  },
  mounted() {
    console.log('mounted')
    this.getPublicFunction()
  },
}
</script>