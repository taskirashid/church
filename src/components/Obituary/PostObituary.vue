<template>
    <div>
      
      <div class="addTop">

        <div class="addSec">
          <button type="button" class="bttn" data-toggle="modal" data-target="#myModalAdd">
            <span>Add</span>
            <i class="fa fa-plus-circle iconAdd" aria-hidden="true"></i>
          </button>
            
        </div>

      </div>
        
              
        <!-- Modal -->

        <form @submit.prevent="submitForm">
        <div class="modal fade" id="myModalAdd" role="dialog">
            <div class="modal-dialog modal-lg">
              <div class="modal-content" >
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Add Obituary</h4>
                </div>

                <div class="modal-body">
                
                  <div class="divImage inputField">
                    <div class="titleName">
                      <h5 class="card-title ">Image :</h5>
                    </div>
                    <div class="inputbox">
                      <img  class="" :src="memeberPhoto" alt="">
                      <label for="upload-photo">
                        <i class="fas fa-edit"></i>
                      </label>
                      <input type="file" @change="editImage($event)" id="upload-photo" ref="imageUpload" accept="image/*">
                    </div>
                  </div>
                
                  <div class="inputField">
                    <div class="titleName">
                    <h5 class="card-title">Date</h5>
                    </div>
                    <div class="inputbox">
                      <input class="titleInput" type="date" v-model="datedata">
                    </div>
                  </div>

                  <div class="inputField">
                    <div class="titleName">
                    <h5 class="card-title">Name</h5>
                    </div>
                    <div class="inputbox">
                      <input class="titleInput" type="text" v-model="membername">
                    </div>
                  </div>

                  <div class="inputField">
                    <div class="titleName">
                    <h5 class="card-title">Description</h5>
                    </div>
                    <div class="inputbox">
                      <textarea class="fillbox" type="text" v-model="descriptiondata"></textarea>
                    </div>
                  </div>

                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button @click="submitForm" type="submit" class="btn btn-default" data-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
          </div>
          </form>

        <!-- Modal -->


    </div>
</template>

<script>

import axios from '@/axios/axios'
import moment from 'moment'


export default {
  data() {
    return {
      datedata: moment().format("DD-MMM-YYYY"),
      membername: '',
      descriptiondata: '',
      memeberPhoto: ''
      // dataToUpdate: []
    };
  },
  methods: {

    
    editImage(event){
      this.file = event.target.files[0];
       this.memeberPhoto = URL.createObjectURL(this.file);

      },
    
    async submitForm() {
      try {
        const formData = new FormData
        
        const payload = {
          date: this.datedata, 
            member: this.membername,
            description: this.descriptiondata
          }

          console.log(this.message);
          formData.append('img',this.file)
          formData.append('data',JSON.stringify(payload))
          
          const response = await axios.post('/obituary/create', formData);
          console.log(response.data.obituary);
          this.date=response.data.obituary
          this.member=response.data.obituary
          this.description=response.data.obituary
          this.$emit('getObituaryList')
        
        } catch (error) {
            console.error(error);
        }
    },
      // getCreateDate(date){
      //   return moment(date).format('DD-MM-YYYY')
      // },

  }
};

</script>


<style scoped>



.addSec{
  display: flex;
  justify-content: flex-end;
  padding: 8px 20px;
  background: var(--multi-charcol);
  width: fit-content;
  
  
}
.addSec button{
  color: var(--main-color);
  font-size: 13px;
  font-weight: 600;
}

.bttn{
display: flex;
align-items: center;
border: none;
background: none;
}


.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 120px;
}


.titleName{
  width: 156px;
  display: flex;
  justify-content: flex-end;
}

.inputbox{
width: 75%;
}


.model-body{
  margin-top: 20px;
  margin-bottom: 20px;
}



.fillbox{
padding-left: 8px;
  /* margin-left: 12px; */
  /* height: 100%; */
  width: 100%;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
}

.addTop{
display: flex;
justify-content: flex-end;
}

.iconAdd{
padding: 4px;
color: var(--main-color);
  font-size: 13px;
}


.inputbox{
  width: 75%;
  margin-left: 10px;
}

.inputField{
  display: flex;
  width: 75%;
  margin-bottom: 10px;
}

.titleInput {
    height: 34px;
    width: 100%;
    border: 2px solid #c7c7c7;
    border-radius: 3px;
    padding: 5px;
}

.divImage{
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
  background-image: image();
}

.divImage input{
  display: none;
}





</style>