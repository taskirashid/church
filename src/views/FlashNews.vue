<template>
  <div class="viewDiv flashNews viewht scroll">
    <div class="topper">
      <h3>Flash News</h3>
      <PostFlashNews @getFlashNewsList="getFlashNewsList"/>
    </div>

    <div class="bgann" v-for="item in list" :key="item.id">
      <div class="editField editTrash">
        <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
          <i class="fas fa-edit"></i>
        </button>  
        <button  v-on:click="deleteProduct(item.flashNewsId)" type="button" class="bttn" >
          <i class="fas fa-trash"></i>
        </button>  
      </div>
      <FlashNews :flashnewsData = 'item.txt' :flashValue="flashValue"/>
      <div class="divDate">
        <h6 class="date">{{getCreateDate(item.updatedAt)}}</h6>
      </div>
    </div>

          

    <!-- Modal -->

    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" >
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Flash News</h4>
            </div>

            <div class="modal-body">
              <div>
                <div class="titleName">
                  <h5 class="card-title">News</h5>
                </div>
                <div class="inputbox">
                  <textarea class="fillbox" type="text" v-model="dataToUpdate.txt"></textarea>
                </div>
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button @click="updateData" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </div>

    <!-- Modal -->


  </div>
</template>

<script>
import moment from 'moment'
import axios from '@/axios/axios'
import FlashNews from '@/components/FlashNews/FlashNews.vue'
import PostFlashNews from '@/components/FlashNews/PostFlashNews.vue'

export default {
  name: 'FlashNews-',
  components:{
    PostFlashNews,
    FlashNews,
  },

  data(){
      return{
        list: [],
        dataToUpdate: '',
        flashValue: false,
      }
    },

    
    async mounted() {
       this.getFlashNewsList()
    },
    methods: {
      async getFlashNewsList() {
        const response = await axios.get(`/flash-news/list`)
        console.log(response)
        console.warn(response.data.news)
        this.list=response.data.news
        this.flashValue = !this.flashValue
      },
      getCreateDate(date){
        return moment(date).format('DD-MM-YYYY')
      },
      
    
    editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            txt: this.dataToUpdate.txt,
          }
          const response = await axios.patch(`/flash-news/update/${this.dataToUpdate.flashNewsId}`, payload)
          console.log(response.data)
          console.warn(response.data.news)
          // this.txt=response.data.news
          // window.location.reload();
          await this.getFlashNewsList()
        }
        catch(error){
          console.log(error)
        }
      },
      
      async deleteProduct(flashNewsId) {
          if(confirm("Do you really want to delete?")){
            axios.delete(`flash-news/delete/`+flashNewsId).then(()=>{
              this.getFlashNewsList();
            })
          }
        }

    },


}

</script>


<style scoped>

.bgann{
    /* background-color: #dddddd; */
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 15px;
  margin: 2rem 0rem 2rem 0rem;
}

/* .flashNews{
  margin: 0px 0px 0px 0px;
  padding: 18px 20px 24px 23px;
  width: -webkit-fill-available;
  background: #fff;
} */

.divDate{
  color: #707070;
  display: flex;
  justify-content: flex-end;
}


.topper{
  display: flex;
    justify-content: space-between;
    align-items: center;
}
.topper h3{
  margin-top: 0px;
  margin-bottom: 0px;
}


.bttn{
  border: none;
  background: none;
}

.editField{
  display: flex;
  justify-content: flex-end;
}


.modal-body{
  /* display: flex; */
}

.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 140px;
}

.titleInput{
  /* width: 250px; */ 
  height: 34px;
  /* height: 100%;  */
  width: 75%;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 5px;
}

.fillbox{
  /* margin-left: 12px; */
  height: 150px;
  width: 100%;
}
.inputbox{
  width: 75%;
  
}
.inputbox textarea{
  width: 100%;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 5px;
}


</style>