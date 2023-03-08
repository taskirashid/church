<template>
    <div class="comp">
        <div class="flash scroll-x" >
          <table class="table">
            <thead>
              <tr>
                <!-- <th scope="col">#</th> -->
                <th scope="col"></th>
                <th scope="col">name</th>
                <th scope="col">Organisation</th>
                <th scope="col">Position</th>
                <th scope="col">email</th>
                <th scope="col">phone No.</th>
                <!-- <th scope="col">Image</th> -->
                <th scope="col" class="middle">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <!-- <th scope="row">#</th> -->
                <td class="profile">
                    <img :src="item.committeMemberPhoto" alt="">
                </td>
                <td>{{item.name}}</td>
                <td>{{item.organisation.organisationName}}</td>
                <td>{{item.position.positionName}}</td>
                <td>{{item.email}}</td>
                <td>{{item.phoneNo}}</td>
                <td class="middle editTrash">  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                  <button  v-on:click="deleteProduct(item.committeMemberId)" type="button" class="bttn" >
                    <i class="fas fa-trash"></i>
                  </button>  
                </td>
              </tr>


              
                <!-- Modal -->

                <div class="modal fade" id="myModal" role="dialog" v-if="dialog">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Committee Member</h4>
                        </div>
                        <div class="modal-body">
                          
                          <div class="divImage inputField">
                            <div class="titleName">
                              <h5 class="card-title ">Image :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="divImage">
                                <img :src="dataToUpdate.committeMemberPhoto" alt="">
                                <label for="upload-photos">
                                  <i class="fas fa-edit"></i>
                                </label>
                                <input type="file" @change="editImage($event)" id="upload-photos" ref="imageUpload" accept="image/*">
                              </div>
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.name">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">organisation :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="selectSec">
                                <select class="form-control fillbox" v-model="dataToUpdate.organisation._id" >
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
                                <select class="form-control fillbox" v-model="dataToUpdate.position._id" >
                                  <option v-for="item in poslist" :key="item._id" :value="item._id" :class="{'test': item.hide}" :disabled="item.hide" >{{item.positionName}}</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Email :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.email">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Phone No :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.phoneNo">
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



            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
import axios from '@/axios/axios'

export default {
  name: 'Members-',
  props: {
    msg: String,
    memberValue: Boolean,
  },
  data(){
      return{
        list: [],
        orglist: [],
        poslist: [],
        dataToUpdate: '',
        dialog: false,
        file: '',
      }
    },

    watch: {
      memberValue() {
        this.getMemberList()
      }
    },
    
    async mounted() {
       this.getMemberList()
       this.getOrgansiationList()
       this.getPositionList()
    },
    methods: {
      async getMemberList() {
        const response = await axios.get(`/committe-member/list`)
        console.log(response)
        console.log(response.data)
        // console.warn(response.data.committe_member)
        this.list=response.data.committe_member
        // this.list=response.img.committe_member
        // this.dataToUpdate = this.list[0]
      },
      
      async getOrgansiationList() {
        const response = await axios.get(`/organisation/list`)
        console.log(response)
        // console.warn(response.data.organisation)
        this.orglist=response.data.organisation
      },

      async getPositionList() {
        const response = await axios.get(`/position/list-position`)
        console.log(response)
        // console.warn(response.data.OrganizationPositions)
        this.poslist=response.data.OrganizationPositions
      },

      editData(item){
        this.dialog = true
        this.dataToUpdate={...item}
        // console.log(this.dataToUpdate.organisation.organisationId)
        // console.log(this.dataToUpdate.position.positionId)
      },

      editImage(event){
        this.file = event.target.files[0];
        this.dataToUpdate.committeMemberPhoto = URL.createObjectURL(this.file);

      },

      async updateData() {
        try{
          const formData = new FormData

          const payload = {
            organisation: this.dataToUpdate.organisation._id,
            position: this.dataToUpdate.position._id,
            name: this.dataToUpdate.name,
            email: this.dataToUpdate.email,
            phoneNo: this.dataToUpdate.phoneNo,
            // committeMemberPhoto: this.dataToUpdate.committeMemberPhoto
          }
          console.log(this.dataToUpdate.organisation)
          console.log(this.dataToUpdate.position)
          console.log(this.dataToUpdate.name)
          console.log(this.dataToUpdate.email)
          console.log(this.dataToUpdate.phoneNo)
          console.log(this.dataToUpdate.committeMemberPhoto)
          
          formData.append('img',this.file)
          formData.append('data',JSON.stringify(payload))
          const response = await axios.patch(`/committe-member/update/${this.dataToUpdate.committeMemberId}`, formData)
          // const response = await axios.patch(`/committe-member/update/${this.dataToUpdate.committeMemberId}`, {data: JSON.stringify(payload)})
          console.log(response)
          console.warn(response.data.committe_member)
          this.getMemberList()
          this.getOrgansiationList()
          this.getPositionList()
        }
        catch(error){
          console.log(error)
        }
      },

      
      async deleteProduct(committeMemberId) {
          if(confirm("Do you really want to delete?")){
            axios.delete(`committe-member/delete/`+committeMemberId).then(()=>{
              this.getMemberList();
            })
          }
        }


    },
}

</script>


<style scoped>

.scroll-x{
  overflow-y: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-right: 1.5rem;
  margin-left: 300px;
}

.comp{
  padding-top: 8px;
    overflow: scroll;
}

.flash{
    display: block;
    justify-content: space-between;
    /* padding: 2rem; */
    border-radius: 2px;
    color: var(--color-dark);
    /* margin-top: 5px; */

    
    /* width: fit-content; */
    margin: 0px;
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
}

.test{
  display: none;
}

.viewDiv{
  
  padding-left: 15px;
    padding-right: 15px;
}
.table{
  margin-bottom: 0px;
}

.profile{
}
.profile img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

/* hr{
  border: 1px solid #dd9a2f;
} */


.bttn{
  border: none;
  background: none;
}

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

.form-control{
  /* width: 75%; */
}

.fillbox{
  height: 100%;
    border: 2px solid #c7c7c7;
    border-radius: 3px;
    padding: 5px;
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

.selectSec{
  /* margin-left: 10px; */
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
  background-image: image();
}

.divImage input{
  display: none;
}


</style>