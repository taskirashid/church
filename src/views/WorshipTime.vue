<template>
  <div class="viewDiv Workship  viewht scroll">
    <div class="topper">
      <h3>Worship Time</h3>
      <PostWorship @getWorkshipList="getWorkshipList"/>
    </div>
    <WorkshipTimeCard :worshipValue="worshipValue"/>
  </div>
</template>

<script>
// import PostWorship from '@/components/WorkshipTime/PostWorship.vue'
import PostWorship from '@/components/WorkshipTime/PostWorship.vue'
import WorkshipTimeCard from '@/components/WorkshipTime/WorkshipTimeCard.vue'

export default {
  name: 'WorkshipMain-',
  components: {
    PostWorship,
    WorkshipTimeCard,
  },
  data() {
    return {
      worshipValue: false,
    }
  },
  methods: {
    getWorkshipList() {
      this.worshipValue = !this.worshipValue
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
/* .Workship{
  display: flex;
  align-items: flex-start;
  width: 100%;
  background-size: cover;
  z-index: -99;
  background: #fff;
} */

</style>