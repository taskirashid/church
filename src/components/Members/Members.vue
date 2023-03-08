<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Name</th>
                <th scope="col">Member id</th>
                <th scope="col">Edavaka register no</th>
                <th scope="col">Prayer Group</th>
                <th scope="col" class="middle">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <td class="profile">
                    <img :src="item.member_photo" alt="">
                </td>
                <td class="nameSec">{{item.member_name}}</td>
                <td scope="row">{{item.memberId}}</td>
                <td>{{item.edavaka_register_no}}</td>
                <td>{{item.prayer_group.prayerGroupName}}</td>
                <td class="middle editTrash">  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                  <button  v-on:click="deleteProduct(item.memberId)" type="button" class="bttn" >
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
                          <h4 class="modal-title">Member</h4>
                        </div>
                        <div class="modal-body">
                          

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Image</h5>
                            </div>
                            <div class="inputbox">
                              <div class="divImage">
                                <img :src="dataToUpdate.member_photo" alt="">
                                <label for="upload-photo">
                                  <i class="fas fa-edit"></i>
                                </label>
                                <input type="file" @change="editImage($event)" id="upload-photo" ref="imageUpload" accept="image/*">
                              </div>
                            </div>
                          </div>

                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Member is priest :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.member_is_priest"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="dataToUpdate.member_is_priest" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.member_is_priest" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox nameSec" type="text" v-model="dataToUpdate.member_name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Pet Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.pet_name">
                            </div>
                          </div>

                          <!-- <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Password :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="password" v-model="dataToUpdate.password">
                            </div>
                          </div> -->

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Gender :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.gender"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="dataToUpdate.gender" value="male"> Male
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.gender" value="female"> Female
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.gender" value="other">  Other
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Membership Status :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.membership_status"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="dataToUpdate.membership_status" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.membership_status" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">House Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.house_name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Address 1 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.address1">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Address 2 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.address2">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Postoffice :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.postoffice">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Pincode :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.pincode">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Voting Right :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.voting_right"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="dataToUpdate.voting_right" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.voting_right" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Prayer Group :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="selectSec">
                                <select class="form-control fillbox" v-model="dataToUpdate.prayer_group._id" >
                                  <option v-for="item in pralist" :key="item._id" :value="item._id">{{item.prayerGroupName}}</option>
                                </select>
                              </div>
                            </div>
                          </div> 
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Designation :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.designation">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Organisation :</h5>
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
                              <h5 class="card-title">Landline :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.landline">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Mobile Phone :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.mobile_phone">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Phone Office :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.phone_office">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Email :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="email" v-model="dataToUpdate.email">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Blood Group :</h5>
                            </div>
                            <div class="inputbox">
                              <select class="form-control fillbox" v-model="dataToUpdate.blood_group" >
                                <option value="A+">A+</option>
                                <option value="O+">O+</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="A-">A-</option>
                                <option value="O-">O-</option>
                                <option value="B-">B-</option>
                                <option value="AB-">AB-</option>
                              </select>
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.blood_group"> -->
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Birthday :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="date" v-model="dataToUpdate.birthday"> -->
                              <input class="fillbox" type="date" v-model="dataToUpdate.birthday">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Marriage Date :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="date" v-model="dataToUpdate.marriage_date">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Home parish house name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.home_parish_house_name">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Home parish :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.home_parish">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Native place :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.native_place">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Latitude :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.latitude">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Longitude :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.longitude">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">General remarks :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.general_remarks">
                            </div>
                          </div>


                          
                            
                          <!-- <button  @click="editpassword(item)" type="button" class="bttn" data-toggle="modalpassword" data-target="#myModalpop">Reset Password -->
                            <!-- <i class="fas fa-edit"></i> -->
                          <!-- </button>   -->

                          
              
                            <!-- Modal -->
<!-- 
                            <div class="modal fade pop" id="myModalpop" role="dialog" v-if="dialog">
                                <div class="modal-dialog modal-lg extra">
                                  <div class="modal-content" >
                                    <div class="modal-header">
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                                      <h4 class="modal-title">Reset Password </h4>
                                    </div>
                                    <div class="modal-body">
                                      
                                      
                                      <div class="inputField">
                                        <div class="titleName">
                                          <h5 class="card-title">New password :</h5>
                                        </div>
                                        <div class="inputbox">
                                          <input class="fillbox" type="text" v-model="dataToUpdate.home_parish">
                                        </div>
                                      </div>

                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                      <button @click="updateData" type="submit" class="btn btn-default" data-dismiss="modalpassword">Update</button>
                                    </div>
                                  </div>
                                </div>
                              </div> -->

                            <!-- Modal -->


                          
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
import moment from 'moment'
import axios from '@/axios/axios'

export default {
  name: 'Members-',
  props: {
    memberValue: Boolean,
  },
    data(){
      return{
        list: [],
        pralist: [],
        orglist: [],
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
       this.getPrayerGroupList()
       this.getOrgansiationList()
    },
    methods: {
      async getMemberList() {
        const response = await axios.post(`/member/getAllMember`)
        console.log(response)
        console.warn(response.data)
        this.list=response.data
      },
      getCreateDate(birthday){
        return moment(birthday).format('DD-MM-YYYY')
      },

      
      async getPrayerGroupList() {
        const response = await axios.get(`/prayer-group/list-all-prayer-groups`)
        console.log(response)
        console.warn(response.data.listOfPrayerGroup)
        this.pralist=response.data.listOfPrayerGroup
      },
      
      async getOrgansiationList() {
        const response = await axios.get(`/organisation/list`)
        console.log(response)
        console.warn(response.data.organisation)
        this.orglist=response.data.organisation
      },


      editData(item){
        this.dialog = true  
        this.dataToUpdate={...item}
        this.dataToUpdate.birthday=moment(this.dataToUpdate.birthday).format('YYYY-MM-DD')
        if (this.dataToUpdate.marriage_date !== null) {
          this.dataToUpdate.marriage_date=moment(this.dataToUpdate.marriage_date).format('YYYY-MM-DD')
      }
        // console.log(this.dataToUpdate.organisation.organisationId)
        // console.log(this.dataToUpdate.position.positionId)
      },

      
      editImage(event){
      this.file = event.target.files[0];
       this.dataToUpdate.member_photo = URL.createObjectURL(this.file);
      },


      async updateData() {
        try{
          const formData = new FormData

          const payload = {
            member_is_priest: this.dataToUpdate.member_is_priest,
            member_name: this.dataToUpdate.member_name,
            pet_name: this.dataToUpdate.pet_name,
            gender: this.dataToUpdate.gender,
            membership_status: this.dataToUpdate.membership_status,
            house_name: this.dataToUpdate.house_name,
            address1: this.dataToUpdate.address1,
            address2: this.dataToUpdate.address2,
            postoffice: this.dataToUpdate.postoffice,
            pincode: this.dataToUpdate.pincode,
            voting_right: this.dataToUpdate.voting_right,
            prayer_group: this.dataToUpdate.prayer_group._id,
            designation: this.dataToUpdate.designation,
            organisation: this.dataToUpdate.organisation._id,
            landline: this.dataToUpdate.landline,
            mobile_phone: this.dataToUpdate.mobile_phone,
            phone_office: this.dataToUpdate.phone_office,
            email: this.dataToUpdate.email,
            blood_group: this.dataToUpdate.blood_group,
            birthday: this.dataToUpdate.birthday,
            marriage_date: this.dataToUpdate.marriage_date === null ? '' :this.dataToUpdate.marriage_date,
            home_parish_house_name: this.dataToUpdate.home_parish_house_name,
            home_parish: this.dataToUpdate.home_parish,
            native_place: this.dataToUpdate.native_place,
            latitude: this.dataToUpdate.latitude,
            longitude: this.dataToUpdate.longitude,
            general_remarks: this.dataToUpdate.general_remarks,
          }
          formData.append('img',this.file)
          formData.append('data',JSON.stringify(payload))
          const response = await axios.patch(`/member/updateMember/${this.dataToUpdate.memberId}`, formData)
          // const response = await axios.patch(`/member/updateMember/${this.dataToUpdate.memberId}`, {data: JSON.stringify(payload)})
          console.log(response.data)
          console.warn(response.data.member)
          this.getMemberList()
          this.getPrayerGroupList()
          this.getOrgansiationList()
        }
        catch(error){
          console.log(error)
        }
      },


      editpassword(item){
        this.dialog = true
        this.dataToUpdate={...item}
      },

      
      
      async deleteProduct(memberId) {
          if(confirm("Do you really want to delete?")){
            axios.delete(`member/deleteMember/`+memberId).then(()=>{
              this.getMemberList();
            })
          }
        },

    },
}

</script>


<style scoped>

.comp{
  padding-top: 8px;
    width: 100%;

}

.flash{
    display: block;
    justify-content: space-between;
    /* padding: 2rem; */
    border-radius: 2px;
    color: var(--color-dark);
    /* margin-top: 5px; */
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
}

.profile img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.bttn{
  border: none;
  background: none;
}

.modal{
    margin-top: 0px;
}

.titleName{
  width: 156px;
  display: flex;
  justify-content: flex-end;
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
  display: flex;
  align-items: center;
}

.inputField{
  display: flex;
  width: 75%;
  margin-bottom: 10px;
}

.selectSec{
  width: 100%;
}

.checkSec{
  display: flex;
  column-gap: 10px;
}

.pop{
  display: contents;
}


.extra{
  position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    justify-content: center;
}

.nameSec{
  text-transform: capitalize;
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