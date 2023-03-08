<template>
    <div>
        
        <div class="msgs-combo">


          <div class="vicar Left">

              <!-- <AsstMsgCard/> -->

              <div>
                <div class="vicarId">

                  <div style="display: flex;">
                    <!-- <img src="@/assets/ass.vicar.png" alt=""> -->
                    <img :src="vicarDetails.photo" alt="">
                    
                    <div>
                      <h4>{{vicarDetails.name}}</h4>
                      <span class="vicarRoll">{{vicarDetails.type}}</span>
                    </div>
                  </div>

                </div>
                <h6>{{vicarDetails.message}}</h6>

              </div>

              <!-- <AsstMsgCard/> -->

          </div>

          <div class="vicar Right">

              <!-- <AsstMsgCard/> -->

              <div>
                <div class="vicarId">

                  <div style="display: flex;">
                    <!-- <img src="@/assets/ass.vicar.png" alt=""> -->
                    <img :src="asstVicarDetails.photo" alt="">
                    
                    <div>
                      <h4>{{asstVicarDetails.name}}</h4>
                              <span class="vicarRoll">{{asstVicarDetails.type}}</span>
                    </div>
                  </div>

                </div>
                <h6>{{asstVicarDetails.message}}</h6>

              </div>

              <!-- <AsstMsgCard/> -->

          </div>


        </div>
    </div>
</template>

<script>
import axios from '@/axios/axios'

export default {
  name: 'OverviewAachans-',
  data() {
    return {
        vicarDetails: '',
        asstVicarDetails: '',
    }
  },

  async mounted() {
       this.getvicarList()
    },
  methods: {
    async getvicarList() {
        const response = await axios.get(`/achens-message/message`)
        console.log(response)
        console.warn(response.data.vicar)
        this.vicarDetails=response.data.vicar
        this.asstVicarDetails=response.data.asstVicar
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
  color: var(--color-dark);
  font-weight: 500;
}

.msg span{
  /* margin: 6px; */ 
    font-size: 12px;
}

.msg .antop{
  display: flex;
  justify-content: space-between
}


.vicarId{
  display: flex;
  justify-content: space-between;
}

.vicarId small {
    display: inline-block;
    color: #6e4a11;
    margin-top: -10px !important;
}

.vicarId div h4{
  margin-bottom: 0;
}

img{
  border-radius: 50%;
  margin-right: 1rem;
  width: 50px;
  height: 50px;
  object-fit: cover;
}

h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
    /* color: #fff; */
}


@media (max-width: 650px) {
  
  .msg .msgs-combo{
    display: block!important;
  }

}



</style>