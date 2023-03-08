<template>
  <div class="viewDiv msg viewht scroll">
    <msg-tab-nav :tabs="['Vicar', 'Asst-vicar']" :selected="selected" @selected="setSelected">

      <msg-tab :isSelected="selected === 'Vicar'" >
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">

          <div style="display: flex; justify-content: flex-end;">
            
            <button @click="editData(dataToUpdate.vicar)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
              <i class="fas fa-edit"></i>
            </button>  
            
          </div>
            
          <MsgCard v-if="dataToUpdate.vicar" :message="dataToUpdate.vicar"/>
        </div>
      </msg-tab>

      <msg-tab :isSelected="selected === 'Asst-vicar'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">

          <div style="display: flex; justify-content: flex-end;">

            <button @click="editData(dataToUpdate.asstVicar)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
              <i class="fas fa-edit"></i>
            </button>  
            
          </div>
            
          <!-- <AsstMsgCard/> -->
          <MsgCard v-if="dataToUpdate.asstVicar" :message="dataToUpdate.asstVicar"/>
        </div>

      </msg-tab>
    </msg-tab-nav>

    <!-- Modal -->

      <div class="modal fade" id="myModal" role="dialog" v-if="dailog" >
        <div class="modal-dialog modal-lg">
          <div class="modal-content" >
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Aachen's Messages</h4>
            </div>

            <div class="modal-body">

              <div>
                <!-- <h5>Vicar Name</h5> -->
                <!-- <input class="titleInput" type="text" v-model="data.name"> -->
                <!-- <img :src="data.photo" alt=""> -->
              </div>

              <div class="inputbox view divImage">
                <img class="" :src="data.photo" alt="">
                <label for="upload-photo">
                  <i class="fas fa-edit"></i>
                </label>
                  <input type="file" @change="editImage($event)" id="upload-photo" ref="imageUpload" accept="image/*">
                  
              </div>

              <div>
                <h5>Vicar Name</h5>
                <input class="titleInput" type="text" v-model="data.name">
              </div>

              <div>
                <div class="titleName">
                  <h5 class="card-title">Vicar Messages:</h5>
                </div>
                <div class="inputbox">
                  <textarea class="fillbox" type="text" v-model="data.message"></textarea>
                </div>

              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button @click="updateData()" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </div>

    <!-- Modal -->

  </div>
  
</template>

<script>
import axios from '@/axios/axios'
import MsgTab from '@/components/Aachens/MsgTab.vue'
import MsgTabNav from '@/components/Aachens/MsgTabNav.vue'
import MsgCard from '@/components/Aachens/MsgCard.vue' 

export default{
  name: 'AachensMsg-',
  components: { 
    MsgTabNav, 
    MsgTab,
    MsgCard,
  },

  data() {
    return {
      selected: 'Vicar',
        dataToUpdate: '',
        dailog: false,
        data: '',
        file: '',
    }
  },
  async mounted() {
    await this.getDataList()
  },

  methods: {
    setSelected(tab) {
      this.selected = tab;
    },

    async getDataList() {
        const response = await axios.get(`/achens-message/message`)
        console.log(response)
        console.warn(response.data)
        this.dataToUpdate=response.data
      },

      
    
    editData(item){
      this.dailog = true
      this.data = item
      this.data={...item}
      console.log(this.data)
      // let keys = Object.keys(this.dataToUpdate);
      // console.log(keys)
      },
    
      editImage(event){
        this.file = event.target.files[0];
        this.data.photo = URL.createObjectURL(this.file);

      },

    async updateData() {
        try{
          const formData = new FormData

          const payload = {
            name: this.data.name,
            message: this.data.message
          }
          formData.append('photo',this.file)
          formData.append('data',JSON.stringify(payload))
          // console.log(this.data.dataToUpdate)
          const response = await axios.patch(`/achens-message/update/${this.data.messageId}`, formData)
          console.log(response.data)
          
          await this.getDataList()
        }
        catch(error){
          console.log(error)
        }
      },
  }

}

</script>

<style>

.main{
  background: var(--off-white)!important;
}



/* .msg{
  margin-top: 0px;
  padding: 18px 20px 24px 23px;
  background: #fff;
} */



.bttn{
  border: none;
  background: none;
}

.editField{
  display: flex;
  justify-content: flex-end;
}

.action{
  display: flex;
  justify-content: flex-end;
}


/* .modal-body{ */
  /* display: flex; */
/* } */



.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 120px;
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




.divImage{
  /* width: 126px; */
  /* height: 150px; */
  margin-bottom: 20px;
  display: flex;
}
.divImage label{
  padding-left: 10px;
}

.divImage img{
  width: 140px;
  height: 140px;
  object-fit: cover;
}

.divImage input{
  display: none;
}


</style>









      <!-- Modal -->

      <!-- <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content" >
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Aachen's Messages</h4>
              </div>
              
              <div class="modal-body">

                <div>
                  <h5>Vicar Name</h5>
                  <input class="titleInput" type="text" v-model="dataToUpdate.name">
                </div>

                <div>
                  <div class="titleName">
                    <h5 class="card-title">Vicar Messages:</h5>
                  </div>
                  <div class="inputbox">
                    <textarea class="fillbox" type="text" v-model="dataToUpdate.message"></textarea>
                  </div>

                </div>

              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button @click="updateData(vicarDetails.type)" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
              </div>
            </div>
          </div>
        </div> -->

      <!-- Modal -->

