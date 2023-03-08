<template>
  <div class="viewDiv Members viewht scroll">
    <div class="topper">
      <h3>Downloads</h3>
      <PostDownload @getDownloadList="getDownloadList"/>
    </div>
    <Downloads :downloadValue="downloadValue"/>
  </div>
</template>

<script>
import Downloads from '@/components/Downloads/Downloads.vue'
import PostDownload from '@/components/Downloads/PostDownload.vue'

export default {
  name: 'Downloads-',
  components:{
    Downloads,
    PostDownload
  },
  data() {
    return {
      downloadValue: false,
    }
  },
  methods: {
    getDownloadList(){
      this.downloadValue = !this.downloadValue
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

/* .Members{
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 25px;
  background-size: cover;
  z-index: -99;
  background: #fff;
} */

</style>