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
                      <h4 class="modal-title">Download Files</h4>
                    </div>

                    <div class="modal-body">
                      <div class="titleName">
                          <h5 class="card-title">Title :</h5>
                      </div>
                      <div class="inputbox">
                          <input class="fillbox" type="text" v-model="title">
                          <!-- value='youth ' -->
                      </div>
                    </div>

                    <div class="modal-body">
                      <div class="titleName">
                        <h5 class="card-title">File :</h5>
                      </div>
                      <div class="inputbox view">
                        <iframe class="" :src="upload" alt=""></iframe>
                        <label for="upload-file">
                          <i class="fas fa-edit"></i>
                        </label>
                        <input type="file" @change="editImage($event)" id="upload-file" ref="" accept="application/pdf, application/vnd.ms-excel">

                      </div>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button @click="submitForm" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
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
  
  
  export default {
  data() {
    return {
        // dataToUpdate: [],
        title: '',
        upload: '',
    };
  },
  methods: {

    editImage(event){
      this.file = event.target.files[0];
       this.upload = URL.createObjectURL(this.file);

      },
    
    async submitForm() {
      try {
        const formData = new FormData

        const payload = {
            title: this.title,
        }
        console.log(this.message);
        formData.append('file',this.file)
        formData.append('data',JSON.stringify(payload))
        const response = await axios.post('/download/upload-pdf', formData);
        console.log(response.data);
        this.title=response.data
        this.$emit('getDownloadList')
        
  
        } catch (error) {
            console.error(error);
        }
    }
  
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
  
  
  
  .addTop{
  display: flex;
  justify-content: flex-end;
  }
  
  .iconAdd{
  padding: 4px;
  color: var(--main-color);
    font-size: 13px;
  }
  
  .bttn{
  display: flex;
  align-items: center;
  border: none;
  background: none;
  }
  
  .modal-body{
  display: block;
  }
  
  .modal{
    /* margin-top: 120px; */
  }
  .modal-dialog{
    margin-top: 140px;
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