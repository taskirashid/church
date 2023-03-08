<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col" class="middle">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <td class="profile">
                    <img :src="item.memeberPhoto" alt="">
                </td>
                <td class="dateSec">{{item.member}}</td>
                <td class="dateSec">{{getCreateDate(item.date)}}</td>
                <td>{{item.description}}</td>
                <td class="middle">  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                </td>
              </tr>


                <!-- Modal -->

                <div class="modal fade" id="myModal" role="dialog" v-if="dailog" >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Obituary</h4>
                        </div>
                        
                        <div class="modal-body">
                          
                          <div class="divImage inputField">
                            <div class="titleName">
                              <h5 class="card-title ">Image :</h5>
                            </div>
                            <div class="inputbox">
                              <img :src="dataToUpdate.memeberPhoto" alt="">
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
                              <input class="titleInput" type="date" v-model="dataToUpdate.date">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                            <h5 class="card-title">Name</h5>
                            </div>
                            <div class="inputbox">
                              <input class="titleInput" type="text" v-model="dataToUpdate.member">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                            <h5 class="card-title">Description</h5>
                            </div>
                            <div class="inputbox">
                              <textarea class="fillbox" type="text" v-model="dataToUpdate.description"></textarea>
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
import moment from 'moment'

export default {
  name: 'Obituary-',
  props: {
    obituryValue: Boolean,
  },
  data(){
      return{
        list: [],
        dataToUpdate: '',
        date: moment().format('YYYY-MM-DD'),
        file: '',
        dailog: false, 
      }
    },
    
    watch: {
      obituryValue() {
        this.getObituaryList()
      }
    },
    
    async mounted() {
       this.getObituaryList()
    },
    methods: {
      async getObituaryList() {
        const response = await axios.get(`/obituary/list`)
        console.log(response)
        console.warn(response.data.obituary)
        this.list=response.data.obituary 
      },
      getCreateDate(date){
        return moment(date).format('DD-MMM-YYYY')
      },


      
      editData(item){
        this.dailog = true
        this.dataToUpdate={...item}
        this.dataToUpdate.date=moment(this.dataToUpdate.date).format('YYYY-MM-DD')
      },


      editImage(event){
        this.file = event.target.files[0];
        this.dataToUpdate.memeberPhoto = URL.createObjectURL(this.file);

      },

      async updateData() {
        console.log('data')
        try{
          const formData = new FormData
          
          const payload = {
           
            // date: this.datedata,
            date:  moment(this.dataToUpdate.date).format('MM-DD-YYYY'),
            member: this.dataToUpdate.member,
            description: this.dataToUpdate.description,
          }
          formData.append('img',this.file)
          formData.append('data',JSON.stringify(payload))
          const response = await axios.patch(`/obituary/update/${this.dataToUpdate.obituaryId}`,formData)
          console.log(response.data)
          await this.getObituaryList();

          // window.location.reload();
        }
        catch(error){
          console.log(error)
        }
      },




    },

  
}

</script>


<style scoped>

td{
  max-width: 400px;
}

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

.dateSec{
  width: 111px;
}

.profile{
  width: 105px;
}
.profile img{
    /* width: inherit; */
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