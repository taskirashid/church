<template>
    <div>
      <div class="addTop">

        <div class="addSec">

          <button @click="editData()" type="button" class="bttn" data-toggle="modal" data-target="#myModalAdd">
            <span>Add</span>
            <i class="fa fa-plus-circle iconAdd" aria-hidden="true"></i>
          </button>

        </div>

      </div>
        
        
        <!-- <input class="fillbox" type="text" v-model="message.member_name" > -->
              
        <!-- Modal -->

        <form @submit.prevent="submitForm">
                <div class="modal fade" id="myModalAdd" role="dialog" v-if="dialog">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Member</h4>
                        </div>
                        <div class="modal-body">

                           
                          <div class="divImage inputField">
                            <div class="titleName">
                              <h5 class="card-title ">* Image :</h5>
                            </div>
                            <div class="inputbox">
                              <img  class="" :src="member_photo" alt="">
                              <label for="upload-photo">
                                <i class="fas fa-edit"></i>
                              </label>
                              <input type="file" @change="editImage($event)" id="upload-photo" ref="imageUpload" accept="image/*">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Member is priest :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="message.member_is_priest"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" name="priest" v-model="member_is_priest" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" name="priest" v-model="member_is_priest" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox nameSec" type="text" v-model="member_name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Pet Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="pet_name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Photo Sl no :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="photo_slno">
                            </div>
                          </div>

                          <!-- <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Password :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="password" v-model="message.password">
                            </div>
                          </div> -->

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Gender :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="message.gender"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" name="gender" v-model="gender" value="male"> Male
                                </div>
                                <div>
                                  <input type="radio" name="gender" v-model="gender" value="female"> Female
                                </div>
                                <div>
                                  <input type="radio" name="gender" v-model="gender" value="other">  Other
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Membership Status :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="message.membership_status"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" name="status" v-model="membership_status" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" name="status" v-model="membership_status" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Member is head :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="message.membership_status"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" name="head" v-model="member_is_head" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" name="head" v-model="member_is_head" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Edavaka Register No :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="edavaka_register_no">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* House Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="house_name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Address 1 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="address1">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Address 2 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="address2">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Postoffice :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="postoffice">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Pincode :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="pincode">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Voting Right :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="message.voting_right"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="voting_right" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" v-model="voting_right" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Prayer Group :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="selectSec">
                                <select class="form-control fillbox" v-model="prayer_group" >
                                  <option v-for="item in pralist" :key="item._id" :value="item._id">{{item.prayerGroupName}}</option>
                                </select>
                              </div>
                            </div>
                          </div> 
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Designation :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="designation">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Organisation :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="selectSec">
                                <select class="form-control fillbox" v-model="organisation" >
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
                              <input class="fillbox" type="text" v-model="landline">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Mobile Phone :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="mobile_phone">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Phone Office :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="phone_office">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Email :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="email" v-model="email">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Blood Group :</h5>
                            </div>
                            <div class="inputbox">
                              <select class="form-control fillbox" v-model="blood_group" >
                                <option value="A+">A+</option>
                                <option value="O+">O+</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="A-">A-</option>
                                <option value="O-">O-</option>
                                <option value="B-">B-</option>
                                <option value="AB-">AB-</option>
                              </select>
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Birthday :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="date" v-model="birthday">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Marriage Date :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="date" v-model="marriage_date">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Home parish house name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="home_parish_house_name">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Home parish :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="home_parish">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Native place :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="native_place">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Latitude :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="latitude">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Longitude :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="longitude">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">General remarks :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="general_remarks">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">* Password :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="password">
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

import moment from 'moment'
import axios from '@/axios/axios'


export default {
  data() {
    return {
      // message: '',
      dialog: false,
      pralist: [],
      orglist: [],
      member_photo: '',

      member_name: '',
      member_is_priest: '',
      edavaka_register_no: '',
      pet_name: '',
      photo_slno: '',
      gender: '',
      membership_status: '',
      member_is_head: '',
      house_name: '',
      address1: '',
      address2: '',
      postoffice: '',
      pincode: '',
      voting_right: '',
      prayer_group: '',
      designation: '',
      organisation: '',
      landline: '',
      mobile_phone: '',
      phone_office: '',
      email: '',
      blood_group: '',
      birthday: '',
      marriage_date: '',
      home_parish_house_name: '',
      home_parish: '',
      native_place: '',
      latitude: '',
      longitude: '',
      general_remarks: '',
      password: '',
    //   items: []
    // list: []
    };
  },

  
async mounted() {
  this.getOrgansiationList()
  this.getPrayerGroupList()
},

  methods: {
    
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
    
    editData(){
        this.dialog = true
        // this.dataToUpdate={...item}
      },
      
      editImage(event){
        this.file = event.target.files[0];
        this.member_photo = URL.createObjectURL(this.file);
        this.marriage_date=moment(this.marriage_date).format('YYYY-MM-DD')
      },
    
    async submitForm() {
      try {
        const formData = new FormData

        const payload = {
            member_is_priest: this.member_is_priest,
            member_name: this.member_name,
            // edavaka_register_no: this.message.edavaka_register_no,
            pet_name: this.pet_name,
            photo_slno: this.photo_slno,
            // password: this.message.password,
            gender: this.gender,
            // Date_of_joining: this.message.Date_of_joining,
            membership_status: this.membership_status,
            member_is_head: this.member_is_head,
            edavaka_register_no: this.edavaka_register_no,
            house_name: this.house_name,
            address1: this.address1,
            address2: this.address2,
            postoffice: this.postoffice,
            pincode: this.pincode,
            voting_right: this.voting_right,
            prayer_group: this.prayer_group,
            designation: this.designation,
            organisation: this.organisation,
            landline: this.landline,
            mobile_phone: this.mobile_phone,
            phone_office: this.phone_office,
            email: this.email,
            blood_group: this.blood_group,
            birthday: this.birthday,
            marriage_date: this.marriage_date,
            home_parish_house_name: this.home_parish_house_name,
            home_parish: this.home_parish,
            native_place: this.native_place,
            latitude: this.latitude,
            longitude: this.longitude,
            general_remarks: this.general_remarks,
            password: this.password,
          }
          console.log(this.message);
          
          
        formData.append('img',this.file)
        formData.append('data',JSON.stringify(payload))

          const response = await axios.post('/member/create', formData);
          console.log(response.data);
          

          
          this.member_is_priest=response.data.create
          // this.edavaka_register_no=response.data.create
          this.member_name=response.data.create
          this.pet_name=response.data.create
          // this.password=response.data.create
          this.gender=response.data.create
          // this.Date_of_joining=response.data.create
          this.membership_status=response.data.create
          this.edavaka_register_no=response.data.create
          this.member_is_head=response.data.create
          this.house_name=response.data.create
          this.address1=response.data.create
          this.address2=response.data.create
          this.postoffice=response.data.create
          this.pincode=response.data.create
          this.voting_right=response.data.create
          this.prayer_group=response.data.create
          this.designation=response.data.create
          this.organisation=response.data.create
          this.landline=response.data.create
          this.mobile_phone=response.data.create
          this.phone_office=response.data.create
          this.email=response.data.create
          this.blood_group=response.data.create
          this.birthday=response.data.create
          this.marriage_date=response.data.create
          this.home_parish_house_name=response.data.create
          this.home_parish=response.data.create
          this.native_place=response.data.create
          this.latitude=response.data.create
          this.longitude=response.data.create
          this.general_remarks=response.data.create
          this.password=response.data.create
          this.$emit('getMemberList')

        //   this.items.push(this.message);
        // this.$push(this.items)
        } catch (error) {
            console.error(error);
          console.log(error + 'message')
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
    display: flex;
    align-items: center;
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