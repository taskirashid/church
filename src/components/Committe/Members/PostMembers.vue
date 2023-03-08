<template>
  <div class="">

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
                  <h4 class="modal-title">Committee Member</h4>
                </div>

                <div class="model-body">

                  
                  <div class="divImage inputField">
                    <div class="titleName">
                      <h5 class="card-title ">Image :</h5>
                    </div>
                    <div class="inputbox">
                      <img  class="" :src="committeMemberPhoto" alt="">
                      <label for="upload-photo">
                        <i class="fas fa-edit"></i>
                      </label>
                      <input type="file" @change="editImage($event)" id="upload-photo" ref="imageUpload" accept="image/*">
                    </div>
                  </div>
                  
                  <div class="inputField">
                    <div class="titleName">
                      <h5 class="card-title">Name :</h5>
                    </div>
                    <div class="inputbox">
                      <input class="fillbox" type="text" v-model="name" >
                    </div>
                  </div>
                  
                  <div class="inputField">
                    <div class="titleName">
                      <h5 class="card-title">Email :</h5>
                    </div>
                    <div class="inputbox">
                      <input class="fillbox" type="text" v-model="email" >
                    </div>
                  </div>
                  
                  <div class="inputField">
                    <div class="titleName">
                      <h5 class="card-title">Phone No :</h5>
                    </div>
                    <div class="inputbox">
                      <input class="fillbox" type="text" v-model="phoneNo" >
                    </div>
                  </div>
                  
                  
                  <div class="inputField">
                    <div class="titleName">
                      <h5 class="card-title">Organisation :</h5>
                    </div>
                    <div class="inputbox">
                      <div class="selectSec">
                        <select class="form-control fillbox"  v-model="organisation" >
                          <option v-for="item in orglist" :key="item._id" :value="item._id">{{item.organisationName}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div class="inputField">
                    <div class="titleName">
                      <h5 class="card-title">Position :</h5>
                    </div>
                    <div class="inputbox">
                      <div class="selectSec">
                        <select class="form-control fillbox" v-model="position" >
                          <option v-for="item in poslist" :key="item._id" :value="item._id">{{item.positionName}}</option>
                        </select>
                      </div>
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


export default {

data() {
  return {
    name: '',
    email: '',
    phoneNo: '',
    position: '',
    organisation: '',
    committeMemberPhoto: '',
    orglist: [],
    poslist: [],
    // file: '',
  };
},

async mounted() {
   this.getOrgansiationList()
   this.getPositionList()
},

  methods: {
  
      async getOrgansiationList() {
        const response = await axios.get(`/organisation/list`)
        console.log(response)
        console.warn(response.data.organisation)
        this.orglist=response.data.organisation
      },

      async getPositionList() {
        const response = await axios.get(`/position/list-position`)
        console.log(response)
        console.warn(response.data.OrganizationPositions)
        this.poslist=response.data.OrganizationPositions
      },

      
      editImage(event){
      this.file = event.target.files[0];
       this.committeMemberPhoto = URL.createObjectURL(this.file);

      },
  
  async submitForm() {
    try {
        const formData = new FormData

        const payload = {
          name: this.name,
          email: this.email,
          phoneNo: this.phoneNo,
          organisation: this.organisation,
          position: this.position,
          }

        formData.append('img',this.file)
        formData.append('data',JSON.stringify(payload))
        const response = await axios.post('/committe-member/create', formData);
        console.log(response.data);
        this.name=response.data.committe_member
        this.email=response.data.committe_member
        this.phoneNo=response.data.committe_member
        this.organisation=response.data.committe_member
        this.position=response.data.committe_member
        this.$emit('getMemberList')
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
  /* padding: 3px 12px 3px 12px;
  background: var(--multi-lightgrey);
  border-radius: 5px;
  color: var(--color-dark);
  font-size: 13px;
  font-weight: 600; */
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

/* .modal-body{
display: flex;
} */

.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 140px;
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
  height: 100%;
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