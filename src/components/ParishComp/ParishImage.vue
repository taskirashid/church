<template>
  <div class="cd">
      <!-- <ul v-for="list in list" :key="list.id"> -->

      <!-- <div  @click="editDataImage(list)" style="display: flex; justify-content: flex-end;">
          <button  type="button" class="bttn" data-toggle="modal" data-target="#myModalImage">
              <i class="fas fa-edit"></i>
          </button>   -->

              <!-- Modal -->

              <!-- <div class="modal fade" id="myModalImage" role="dialog" v-if="dialog">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content" >
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Committee Member</h4>
                      </div>

                      <div class="modal-body">
                        <h5 class="card-title">Parish Photo</h5>
                        <div class="divImage">
                          <img :src="dataToUpdate.parishPhoto" alt="">
                          <label for="upload-parishPhoto">
                            <i class="fas fa-edit"></i>
                          </label>
                          <input type="file" @change="editImage($event)" id="upload-parishPhoto" ref="imageUploadp" accept="image/*">
                        </div>
                      </div>

                      <div class="modal-body">
                          <h5 class="card-title">Metropolitan</h5>
                          <div class="divImage">
                            <img :src="dataToUpdate.metropolitianImage" alt="">
                            <label for="upload-metropolitianImage">
                              <i class="fas fa-edit"></i>
                            </label>
                            <input type="file" @change="editImagem($event)" id="upload-metropolitianImage" ref="imageUploadm" accept="image/*">
                          </div>
                        </div>

                        <div class="modal-body">
                          <h5 class="card-title">Diocesan Bishop</h5>
                          <div class="divImage">
                            <img :src="dataToUpdate.diocesanBishopImage" alt="">
                            <label for="upload-diocesanBishopImage">
                              <i class="fas fa-edit"></i>
                            </label>
                            <input type="file" @change="editImaged($event)" id="upload-diocesanBishopImage" ref="imageUploadd" accept="image/*">
                          </div>
                        </div>

                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button @click="updateData()" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
                      </div>
                    </div>
                  </div>
                </div> -->

              <!-- Modal -->

      <!-- </div> -->

      <ul>
          <li class="card">


              <!-- Modal -->
                  
                    <div  @click="editDataImage(list)" class="imageCardEdit" >
                        <button  type="button" class="bttn" data-toggle="modal" data-target="#myModalImage">
                            <i class="fas fa-edit"></i>
                        </button>  

                         <div class="modal fade" id="myModalImage" role="dialog" v-if="dialog">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content" >
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Parish Photo</h4>
                              </div>

                              <div class="modal-body">
                                <!-- <h5 class="card-title">Parish Photo</h5> -->
                                <div class="divImage">
                                  <img :src="dataToUpdate.parishPhoto" alt="">
                                  <label for="upload-parishPhoto">
                                    <i class="fas fa-edit"></i>
                                  </label>
                                  <input type="file" @change="editImage($event)" id="upload-parishPhoto" ref="imageUploadp" accept="image/*">
                                </div>
                              </div>

                              <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button @click="updateData()" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
                              </div>
                            </div>
                          </div>

                        </div>

                    </div>

                    
              <!-- Modal -->

              <div class="imageDiv">
                  <img :src="list.parishPhoto" alt="">
              </div>


              <div class="cnd capp">
                  <h4>{{ list.parishName }}</h4>
                  <h6>{{ list.address }}</h6>
              </div>
          </li>


          <li class="card">

            
              <!-- Modal -->
                  
              <div  @click="editDataImage(list)" class="imageCardEdit" >
                        <button  type="button" class="bttn" data-toggle="modal" data-target="#myModalmetroImage">
                            <i class="fas fa-edit"></i>
                        </button>  

                         <div class="modal fade" id="myModalmetroImage" role="dialog" v-if="dialog">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content" >
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Metropolitan</h4>
                              </div>

                              <div class="modal-body">
                                <!-- <h5 class="card-title">Metropolitan</h5> -->
                                <div class="divImage">
                                  <img :src="dataToUpdate.metropolitianImage" alt="">
                                  <label for="upload-metropolitianImage">
                                    <i class="fas fa-edit"></i>
                                  </label>
                                  <input type="file" @change="editImagem($event)" id="upload-metropolitianImage" ref="imageUploadm" accept="image/*">
                                </div>
                              </div>

                              <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button @click="updateData()" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
                              </div>
                            </div>
                          </div>

                        </div>

                    </div>

                    
              <!-- Modal -->

              <div class="imageDiv">
                  <img :src="list.metropolitianImage" alt="">
              </div>
              <div class="cnd ">
                  <h4>{{ list.metropolitan }}</h4>
                  <h6>Metropolitan</h6>
              </div>
          </li>

          <li class="card">

            
              <!-- Modal -->
                  
              <div  @click="editDataImage(list)" class="imageCardEdit" >
                        <button  type="button" class="bttn" data-toggle="modal" data-target="#myModalDiocesanImage">
                            <i class="fas fa-edit"></i>
                        </button>  

                         <div class="modal fade" id="myModalDiocesanImage" role="dialog" v-if="dialog">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content" >
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Diocesan Bishop</h4>
                              </div>

                              <div class="modal-body">
                                <!-- <h5 class="card-title">Diocesan Bishop</h5> -->
                                <div class="divImage">
                                  <img :src="dataToUpdate.diocesanBishopImage" alt="">
                                  <label for="upload-diocesanBishopImage">
                                    <i class="fas fa-edit"></i>
                                  </label>
                                  <input type="file" @change="editImaged($event)" id="upload-diocesanBishopImage" ref="imageUploadd" accept="image/*">
                                </div>
                              </div>

                              <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button @click="updateData()" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
                              </div>
                            </div>
                          </div>

                        </div>

                    </div>

                    
              <!-- Modal -->


              <div class="imageDiv">
                  <img :src="list.diocesanBishopImage" alt="">
              </div>
              <div class="cnd">
                  <h4>{{ list.diocesanBishop }}</h4>
                  <h6>Diocesan Bishop</h6>
              </div>
          </li>
      </ul>

      

  </div>

</template>

<script>
import axios from '@/axios/axios'

export default {
name: 'ParishMain-',
data(){
    return{
      list: [],
      dialog: false,
      dataToUpdate: '',
      file: '',
    }
  },

  
  async mounted() {
     this.getparishList()
  },
  methods: {
    async getparishList() {
      const response = await axios.get(`parish/get-parish-details`)
      console.log(response)
      console.warn(response.data)
      this.list=response.data
    },


    
    editDataImage(list){
      this.dialog = true
      this.dataToUpdate={...list}
    },

      
    editImage(event){
      this.file = event.target.files[0];
      this.dataToUpdate.parishPhoto = URL.createObjectURL(this.file);
    },

    editImagem(event){
      this.mfile = event.target.files[0];
      this.dataToUpdate.metropolitianImage = URL.createObjectURL(this.mfile);
    },
      
    editImaged(event){
      this.dfile = event.target.files[0];
      this.dataToUpdate.diocesanBishopImage = URL.createObjectURL(this.dfile);
    },

      async updateData() {
      try{
        const formData = new FormData
        
        formData.append('parishPhoto',this.file)
        formData.append('metropolitianImage',this.mfile)
        formData.append('diocesanBishopImage',this.dfile)
        
        const response = await axios.patch(`/parish/update-parish-details/${this.dataToUpdate.parishId}`, formData)
        // const response = await axios.patch(`/parish/get-parish-details/${this.dataToUpdate.parishId}`, {data: JSON.stringify(payload)})
        console.log(response)
        // console.log(response.data)
        await this.getparishList();
      }
      catch(error){
        console.log(error)
      }
    },


  },
}
</script>

<style scoped>
.cd{
/* margin-top: 14px; */
  width: 100%;
  padding: 2rem;
  /* border: 2px solid #c7c7c7; */
  border-radius: 3px;
  /* box-shadow: inset 0px 0px 9px 2px #dddddd9e; */
}

.cd ul{
  display: flex;
  justify-content: space-evenly;
}

.titleName{
  display: flex;
  justify-content: flex-start;
}

.names{
  display: flex;
  justify-content: flex-end;
}

.fill{
  color: #646464;
  margin-left: 5px;
  margin-bottom: 0px;
}

.txtarea{
  width: 70%;
  justify-content: space-around;
  display: flex;
  height: fit-content;
  border-bottom: 1.5px solid #c7c7c7;
}

.imageDiv{
  height: 42rem;
  overflow: hidden;
}

.divImage{
  width: 272px;
}



.card {
  position: relative;
display: inline-block;
width: 90%;
/* max-width: 20rem; */
margin: 1rem;
font-size: 1rem;
text-decoration: none;
overflow: hidden;
box-shadow: 0 0 3rem -1rem rgba(0,0,0,0.5);
transition: transform 0.1s ease-in-out, box-shadow 0.1s;
}
.card img {
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
  /* height: 300px; */
  object-fit: cover;
}


.imageCardEdit{
    display: flex;
    justify-content: flex-end;
    /* width: 10px; */
    position: absolute;
    background: white;
    padding: 8px;
    right: 0;
    width: fit-content;

}



.cnd{
  margin: 10px;
}



.capp h4::first-letter {
  /* font-weight: 600; */
  text-transform: uppercase;
}
.capp h4{
  /* font-size: 26px; */
  text-transform: lowercase;
}



@media (max-width: 1000px) {

  .cd ul{
      flex-direction: column;
  }


}
</style>