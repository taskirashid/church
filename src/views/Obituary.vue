<template>
  <div class="viewDiv Obituary  viewht scroll">
    <div class="topper">
      <h3>Obituary</h3>
      <PostObituary @getObituaryList="getObituaryList"/>
    </div>
    <Obituary :obituryValue="obituryValue"/>
  </div>
</template>

<script>
import Obituary from '@/components/Obituary/Obituary.vue'
import PostObituary from '@/components/Obituary/PostObituary.vue'

export default {
  name: 'Obituary-',
  components:{
    Obituary,
    PostObituary
  },
  data() {
    return {
      obituryValue: false,
    }
  },
  methods: {
    getObituaryList(){
      this.obituryValue = !this.obituryValue
    },
  }

}

</script>


<style scoped>


.topper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topper h3{
  margin-top: 0px;
  margin-bottom: 0px;
}

/* .Obituary{
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 25px;
  background-size: cover;
  z-index: -99;
  background: #fff;
} */

</style>