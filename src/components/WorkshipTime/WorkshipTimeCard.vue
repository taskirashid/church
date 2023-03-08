<template>
  <div class="comp">

      <div class="flash" >
        <table class="table" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Time</th>
              <th scope="col">Day</th>
              <th scope="col">Title</th>
              <th scope="col" class="middle">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.id">
              <th scope="row">#</th>
              <th>{{item.time}}</th>
              <td>{{item.day}}</td>
              <td>{{item.title}}</td>
              <td class="middle editTrash">  
                <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                  <i class="fas fa-edit"></i>
                </button>  
                  <button  v-on:click="deleteProduct(item.worshipTimeId)" type="button" class="bttn" >
                    <i class="fas fa-trash"></i>
                  </button>  
              </td>
            </tr>

      
          </tbody>
        </table>

      </div>
      
          <!-- Modal -->

          <div class="modal fade" id="myModal" role="dialog">
             <div class="modal-dialog modal-lg">
               <div class="modal-content" >
                 <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal">&times;</button>
                   <h4 class="modal-title">Workship Time</h4>
                 </div>
                 <div class="modal-body">


                   <div class="fillset">
                     <div class="titleName">
                       <h5 class="card-title">Time:</h5>
                     </div>
                     <div class="inputbox">
                       <!-- <input class="titleInput" type="text" v-model="dataToUpdate.time"> -->
                       <vue-timepicker format="hh:mm A"  v-model="dataToUpdate.time"></vue-timepicker>
                     </div>
                   </div>
                   <div class="fillset">
                     <div class="titleName">
                       <h5 class="card-title">Day:</h5>
                     </div>
                     <div class="inputbox">
                       <input class="titleInput" type="text" v-model="dataToUpdate.day">
                     </div>
                   </div>
                   <div class="fillset">
                     <div class="titleName">
                       <h5 class="card-title">Title:</h5>
                     </div>
                     <div class="inputbox">
                       <input class="titleInput" type="text" v-model="dataToUpdate.title">
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
// import Workship from "@/components/WorkshipTime/Workship.vue"
import axios from '@/axios/axios'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default {
  name: 'Members-',
  components: {
    VueTimepicker
  },
  props: {
    worshipValue: Boolean,
  },
  data(){
    return{
      list: [],
      dataToUpdate: '',
      dialog: false,
    }
  },
  
  watch: {
    worshipValue() {
      this.getWorkshipList()
        // setTimeout(() => {
        //   this.getWorkshipList()
        // },2000)
      }
    },
  
  async mounted() {
     this.getWorkshipList()
  },
  methods: {
    async getWorkshipList() {
      const response = await axios.get(`/worship-time/list`)
      console.log(response)
      console.warn(response.data.worshipTime)
      this.list=response.data.worshipTime
    },

    
    editData(item){
        this.dataToUpdate={...item}
     
      },

      async updateData() {
        try{
          const payload = {
            time: this.dataToUpdate.time,
            day: this.dataToUpdate.day,
            title: this.dataToUpdate.title
          }
          const response = await axios.patch(`/worship-time/update/${this.dataToUpdate.worshipTimeId}`, payload)
          console.log(response.data)
          console.warn(response.data.worshipTime)
          await this.getWorkshipList()
        }
        catch(error){
          console.log(error)
        }
      },


      async deleteProduct(worshipTimeId) {
          if(confirm("Do you really want to delete?")){
            axios.delete(`worship-time/delete/`+worshipTimeId).then(()=>{
              this.getWorkshipList();
            })
          }
        }

  },
}

</script>


<style scoped>

h3{
  margin-top: 10px;
}

.comp{
  padding-top: 0px;
  width: 100%;

}

.flash{
  display: block;
  justify-content: space-between;
  /* padding: 2rem; */
  border-radius: 2px;
  color: var(--color-dark);
  margin-top: 10px;
}

.flash h6{
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
}




.bttn{
  border: none;
  background: none;
}

.modal-dialog{
  margin-top: 140px;
}

.modal{
  /* margin-top: 120px; */
}

.fillset{
  display: flex;
    margin: 15px 0px 15px 0px;
}

.titleName{
    padding-right: 10px;
    width: 184px;
    display: flex;
    justify-content: flex-end;
}

.titleInput{
  height: 34px;
  width: 75%;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 5px;
}

.inputbox{
  width: 75%;
}


.vue__time-picker {
    width: auto;
    border-radius: 3px;
    border: 1px solid #c7c7c7;
}

@media (max-width: 650px) {
  
  .fillset{
    display: flex;
    justify-content: flex-end;
  }

  .titleName{
      width: fit-content;
  }
  .inputbox{
    width: 90%;
  }

  .titleInput{
      width: 80%;
  }

}


</style>

