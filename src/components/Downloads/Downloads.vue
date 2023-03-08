<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col" class="middle">View / Download</th>
                <th scope="col" class="middle">Action</th>
              </tr>
            </thead>
            <tbody>
              
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{getCreateDate(item.updatedAt)}}</th>
                <td>{{item.title}}</td>
                <td class="middle">
                  <a :href="item.upload"  target="_blank" download>
                    <button class="downloader">View / Download PDF</button>
                  </a>
                </td>
                <td class="middle editTrash">  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                  <button  v-on:click="deleteProduct(item.downloadId)" type="button" class="bttn" >
                    <i class="fas fa-trash"></i>
                  </button>  
                </td>
              </tr>
              
                <!-- Modal -->

                <div class="modal fade" id="myModal" role="dialog" v-if="dailog">
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
                              <input class="fillbox" type="text" v-model="dataToUpdate.title">
                              <!-- value='youth ' -->
                          </div>
                        </div>

                        <div class="modal-body">
                          <div class="titleName">
                            <h5 class="card-title">File :</h5>
                          </div>
                          <div class="inputbox view">
                            <iframe class="" :src="dataToUpdate.upload" alt=""></iframe>
                            <label for="upload-photo">
                              <i class="fas fa-edit"></i>
                            </label>
                            <input type="file" @change="editImage($event)" id="upload-photo" ref="" accept="application/pdf, application/vnd.ms-excel">
                              
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
import moment from 'moment'
import axios from '@/axios/axios'

export default {
  name: 'Downloads-',
  props: {
    downloadValue: Boolean,
  },
    data(){
      return{
        list: [],
        dataToUpdate: '',
        file: '',
        dailog: false, 
      }
    },

    watch: {
      downloadValue() {
        this.getDownloadList()
      }
    },
    
    async mounted() {
       this.getDownloadList()
    },

    methods: {
      async getDownloadList() {
        const response = await axios.get(`/download/list-uploaded-pdf`)
        console.log(response)
        console.warn(response.data)
        this.list=response.data
      },

      getCreateDate(date){
        return moment(date).format('DD-MMM-YYYY')
      },
      
      editData(item){
        this.dailog = true
        this.dataToUpdate={...item}
      },

      
      editImage(event){
      this.file = event.target.files[0];
       this.dataToUpdate.upload = URL.createObjectURL(this.file);

      },

      async updateData() {
        try{
          const formData = new FormData

          const payload = {
            title: this.dataToUpdate.title,
            // upload: this.dataToUpdate.upload
          }
          formData.append('file',this.file)
          formData.append('data',JSON.stringify(payload))
          const response = await axios.patch(`/download/update-uploading-details/${this.dataToUpdate.downloadId}`, formData)
          // console.log(response.data)
          console.log(response.file)
          // console.warn(response.data)

          await this.getDownloadList()
        }
        catch(error){
          console.log(error)
        }
      },

      async deleteProduct(downloadId) {
          if(confirm("Do you really want to delete?")){
            axios.delete(`download/delete/`+downloadId).then(()=>{
              this.getDownloadList();
            })
          }
        }


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
    border-radius: 2px;
    color: var(--color-dark);
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
}


.modal-body{
  display: flex;
}

.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 120px;
}

.fillbox{
  margin-left: 12px;
  height: 100%;
  width: 100%;
}
.inputbox{
  width: 75%;
}

.view{
  margin-left: 10px;
  display: flex;
  min-height: 200px;
}
.view label{
  margin-left: 10px;
}
.view input{
  display: none;
}

iframe{
  width: 100%;
  /* border: none; */
  /* padding: 0px; */
}

.downloader{
  border: none;
  padding: 9px;
  background: var(--multi-lightgrey);
}
.downloader:hover{
  background: var(--multi-lightpink);
}


</style>