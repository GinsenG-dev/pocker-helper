<script>
  import PushFoldButtons from './PushFold/PushFoldButtons.vue'
  
  export default {
  name: 'PushFold',
  components: {
    PushFoldButtons
  },
  props:{
    sumText: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      sumColor: "red"
    }
  },
  methods: {
    PushFoldMouse(val){
        this.sumColor = val
      }
  }
};

</script>
<template>
  <div>
    <div>
      <PushFoldButtons @ButtonPushFoldMouse="PushFoldMouse" />
    </div>
  </div>
</template>

<style>

</style>
