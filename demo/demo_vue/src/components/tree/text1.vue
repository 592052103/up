<template>
<div id="text1">
  <p>{{ message }}</p>
  <p>{{information}}</p>
</div>
</template>



<script>
export default {
  name: 'text1',
  data () {
    return {
      message: 'Hello Vue.js!',
      information: 'wellcome to Vue!'
    }
  }
}
</script>


