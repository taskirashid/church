<template>
    <div>
        
        <div class="msgs-combo">

          <div class="vicar Left" v-for="item in vicarlist" :key="item.id">
            <MsgCard :vicarDataPhoto = 'item.photo' :vicarDataName = 'item.name' :vicarDataMsg = 'item.message' />
          </div>
          <div class="vicar Right" v-for="item in assilist" :key="item.id">
            <MsgCard :vicarDataPhoto = 'item.photo' :vicarDataName = 'item.name' :vicarDataMsg = 'item.message' />
          </div>


        </div>
    </div>
</template>

<script>
import axios from '@/axios/axios'
import MsgCard from '@/components/Aachens/MsgCard.vue'

export default {
  name: 'Aachans-',
  components:{
    MsgCard
  },
  data() {
    return {
      selected: 'Vicar',
        vicarlist: [],
        assilist: [],
    }
  },

  async mounted() {
       this.getvicarList()
       this.getAssivicarList()
    },
  methods: {
    async getvicarList() {
        const response = await axios.get(`/achens-message/vicar-message`)
        console.log(response)
        console.warn(response.data.getMessage)
        this.vicarlist=response.data.getMessage
      },
    async getAssivicarList() {
        const response = await axios.get(`/achens-message/asst-vicar-message`)
        console.log(response)
        console.warn(response.data.getMessage)
        this.assilist=response.data.getMessage
      },

  }
}

</script>


<style scoped>

.more h4 svg{
  margin-left: 7px;
}


.msg .msgs-combo{
  display: flex;
  column-gap: 20px;
}

.msg .vicar{
  justify-content: space-between;
    width: -webkit-fill-available;
  padding: 2rem;
  border-radius: 2px;
  color: var(--color-dark);
  margin-top: 18px;
  background-color: #f5f5f5;
}


.msg h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.msg span{
  margin: 6px;
}

.msg .antop{
  display: flex;
  justify-content: space-between
}



@media (max-width: 650px) {
  
  .msg .msgs-combo{
    display: block!important;
  }

}



</style>