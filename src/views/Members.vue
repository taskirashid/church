<template>
  <div class="viewDiv Members viewht scroll">
    <div class="topper">
      <h3>Members</h3>
      
        <div class="search-wrapper">
          <span class="las la-search"></span>
          <input type="search" placeholder="Search here" v-model="searchTerm">
        </div>

      <MemberPost @getMemberList="getMemberList"/>
    </div>
    
      <Members :memberValue="memberValue" :serachData = 'searchTerm'/>
      
  </div>
</template>

<script>
import MemberPost from '@/components/Members/MemberPost.vue'
import Members from '@/components/Members/Members.vue'

export default {
  name: 'WorkshipMain-',
  components:{
    Members,
    MemberPost
  },
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      memberValue: false,
    }
  },

    // async mounted() {
    //    this.getMemberList()
    // },
  methods:{
    getMemberList(){
      this.memberValue = !this.memberValue
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

.search-wrapper {
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 40px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}

.search-wrapper span{
  display: inline-block;
  padding: .5rem;
  font-size: 1.5rem;
  padding-left: 1.2rem;
}

.search-wrapper input{
  height: 100%;
  padding: .5rem;
  border: none;
  outline: none;
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