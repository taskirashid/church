<template>
  <div class="viewDiv Parish viewht scroll">
    <parish-tab-nav :tabs="['Details', 'History']" :selected="selected" @selected="setSelected">
      <parish-tab :isSelected="selected === 'Details'">
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">
          <ParishDetails/>
          <hr>
          <ParishImage />
        </div>
      </parish-tab>
      <parish-tab :isSelected="selected === 'History'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">
          <HistoryCard/>
        </div>
      </parish-tab>
    </parish-tab-nav>
  </div>
  
</template>

<script>
// import axios from '@/axios/axios'
import ParishTab from '@/components/ParishComp/ParishTab.vue'
import ParishTabNav from '@/components/ParishComp/ParishTabNav.vue'
import ParishDetails from '@/components/ParishComp/ParishDetails.vue'
import ParishImage from '@/components/ParishComp/ParishImage.vue'
import HistoryCard from '@/components/ParishComp/HistoryCard.vue'

export default{
  name: 'Parish-',
  components: {
    ParishTabNav,
    ParishTab,
    ParishDetails,
    ParishImage,
    HistoryCard
},
  data() {
    return {
      selected: 'Details',
      // list: [],
      // imageSrc: ''
    }
  },

    // async mounted() {
    //    this.getParishList()
    // },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
      // async getParishList() {
      //   const response = await axios.get(`parish/get-parish-details`)
      //   console.log(response)
      //   console.warn(response.data.getparishDetail)
      //   this.imageSrc=response.data.getparishDetail
      // },
  }

}

</script>

<style>

</style>


