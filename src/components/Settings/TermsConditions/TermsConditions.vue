<template>
    <div class="comp">
        <div class="card" v-for="item in list" :key="item.id">
          <div class="editField">
            <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                <i class="fas fa-edit"></i>
            </button>  
          </div>
          <span v-html="item.text"></span>
          <!-- <h4>{{item.}}</h4> -->


          
          <!-- Modal -->

          <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog modal-lg">
                <div class="modal-content" >
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Terms & Conditions</h4>
                  </div>

                  <div class="modal-body">
                    <div>
                      <div class="inputbox">
                          
                        <!-- <vue-editor :editorToolbar="customToolbar" v-model="dataToUpdate.text"></vue-editor> -->
                        <vue-editor v-model="dataToUpdate.text"></vue-editor>
                        

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
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from '@/axios/axios'

export default {
  name: 'TermsConditions-',
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
       this.getTermsConditionsList()
    },
    methods: {
      async getTermsConditionsList() {
        const response = await axios.get(`/terms-and-condition/list`)
        console.log(response)
        console.warn(response.data)
        this.list=response.data
      },

         
    editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            text: this.dataToUpdate.text,
            // description: this.dataToUpdate.description,
          }
          const response = await axios.patch(`/terms-and-condition/update/${this.dataToUpdate.termsAndConditionId}`, payload)
          console.log(response.data)
          console.warn(response.data)
          // this.description=response.data.getHistory
          // window.location.reload();
          await this.getTermsConditionsList()
        }
        catch(error){
          console.log(error)
        }
      },
      


    },
}

</script>


<style scoped>

.comp{
  padding-top: 8px;
  /* display: flex; */
}

.card{
  width: 100%;
}

h4{
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
}

.text-editor{
    margin: 30px 0px 30px 0px;
  }
</style>