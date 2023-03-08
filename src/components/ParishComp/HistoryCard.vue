<template>
    <div class="">
      <!-- text-editor -->
      <div v-for="item in list" :key="item.id">
      <!-- <div> -->
        <div class="editField">
          <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
              <i class="fas fa-edit"></i>
          </button>  
        </div>
        <span v-html="item.description"></span>
        <!-- <div>
          <div v-html="description"></div>
          </div> -->
        


      
    <!-- Modal -->

    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" >
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">History</h4>
            </div>

            <div class="modal-body">
              <div>
                <div class="inputbox">
                     
                  <!-- <vue-editor :editorToolbar="customToolbar" v-model="dataToUpdate.description"></vue-editor> -->
                  <vue-editor v-model="dataToUpdate.description"></vue-editor>
                   
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


   <!-- <vue-editor :editorToolbar="customToolbar" v-model="content"></vue-editor> -->



    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from '@/axios/axios'

export default {
  components: {
    VueEditor
  },
  
  data(){
      return{
        list: [],
        dataToUpdate: '',
      }
    },

    
    async mounted() {
       this.getHistory()
    },
    methods: {
      async getHistory() {
        const response = await axios.get(`/history/get-history`)
        console.log(response)
        console.warn(response.data.getHistory)
        this.list=response.data.getHistory
      },

      
    editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            description: this.dataToUpdate.description,
          }
          const response = await axios.patch(`/history/update/${this.dataToUpdate.historyId}`, payload)
          console.log(response.data)
          console.warn(response.data.getHistory)
          // this.description=response.data.getHistory
          // window.location.reload();
          await this.getHistory()
        }
        catch(error){
          console.log(error)
        }
      },
      
      
    },

}

</script>

<style scoped>

.text-editor{
  margin: 30px 0px 30px 0px;
}

/* h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
} */



</style>