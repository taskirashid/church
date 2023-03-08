<template>
  <div class="pmDiv cd">
      
    <!-- address -->
    <!-- <div class="outerCard" v-for="list in list" :key="list.id"> -->
    <div class="outerCard">
        
        <div class="editSpace">
          <button  @click="editData(list)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
            <i class="fas fa-edit"></i>
          </button>
        </div>

          <h3 class="parishName">{{ list.parishName }}</h3>
          <!-- <h3 class="parishName">revive haven church</h3> -->
          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Address :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.address }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Email :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.email }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Website :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.website }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Mobile-1 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.mobile1 }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Mobile-2 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.mobile2 }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Landline-1 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.landline1 }}</h5>
             </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Landline-2 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.landline2 }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Metropolitan :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.metropolitan }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">DiocesanBishop :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.diocesanBishop }}</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Vicar :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.vicarName }}</h5>
            </div>
        </div>
        <div class="address">
            <div class="titleName">
                <h5 class="card-title">Assi. Vicar :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.asstVicarName }}</h5>
            </div>
        </div>
        <div class="address">
            <div class="titleName">
                <h5 class="card-title">Sexton :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.sextonName }}</h5>
            </div>
        </div>

        <div class="address">
            <div class="titleName">
                <h5 class="card-title">Latitude :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.latitude }}</h5>
            </div>
        </div>

        <div class="address">
            <div class="titleName">
                <h5 class="card-title">Longitude :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">{{ list.longitude }}</h5>
            </div>
        </div>

        
    </div>

    
                <!-- Modal -->

                <div class="modal fade" id="myModal" role="dialog" v-if="dailog" >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Parish Details</h4>
                        </div>
                        <div class="modal-body">

                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Parish Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.parishName">
                            </div>

                          </div>

                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Address :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.address">
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
                              <h5 class="card-title">Website :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.website">
                            </div>

                          </div>
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Mobile1 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.mobile1">
                            </div>

                          </div>
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Mobile2 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.mobile2">
                            </div>

                          </div>
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Landline1 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.landline1">
                            </div>

                          </div>
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Landline2 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.landline2">
                            </div>

                          </div>
                          
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">metropolitan :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.metropolitan">
                            </div>

                          </div>
                          
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">diocesanBishop :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.diocesanBishop">
                            </div>

                          </div>
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Vicar Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.vicarName">
                            </div>
                            
                          </div>
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">Asst Vicar Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.asstVicarName">
                            </div>
                            
                          </div>
                          
                          <div class="inputField">

                            <div class="titleName">
                              <h5 class="card-title">SextonName :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.sextonName">
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


                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button @click="updateData" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
                        </div>
                      </div>
                    </div>
                  </div>

                <!-- Modal -->


        
  </div>
</template>

<script>
import axios from '@/axios/axios'

export default {
  name: 'ParishMain-',
  data(){
      return{
        list: [],
        dataToUpdate: '',
        file: '',
        dailog: false, 
      }
    },

    
    async mounted() {
       this.getparishList()
    },
    methods: {
      async getparishList() {
        const response = await axios.get(`parish/get-parish-details`)
        console.log(response)
        // console.warn(response.data)
        this.list=response.data
      },

      editData(list){
        this.dailog = true
        this.dataToUpdate={...list}
      },


      async updateData() {
        try{

          const payload = {
            parishName: this.dataToUpdate.parishName,
            address: this.dataToUpdate.address,
            email: this.dataToUpdate.email,
            website: this.dataToUpdate.website,
            mobile1: this.dataToUpdate.mobile1,
            mobile2: this.dataToUpdate.mobile2,
            landline1: this.dataToUpdate.landline1,
            landline2: this.dataToUpdate.landline2,
            metropolitan: this.dataToUpdate.metropolitan,
            diocesanBishop: this.dataToUpdate.diocesanBishop,
            vicarName: this.dataToUpdate.vicarName,
            asstVicarName: this.dataToUpdate.asstVicarName,
            sextonName: this.dataToUpdate.sextonName,
            latitude: this.dataToUpdate.latitude,
            longitude: this.dataToUpdate.longitude
          }
          const response = await axios.patch(`/parish/update-parish-details/${this.dataToUpdate.parishId}`, {data: JSON.stringify(payload)})
          console.log(response.data)
          console.warn(response.data)
          // this.parishName=response.data
          // this.address=response.data
          // this.email=response.data
          // this.website=response.data
          // this.mobile1=response.data
          // this.mobile2=response.data
          // this.landline1=response.data
          // this.landline2=response.data
          // this.metropolitan=response.data
          // this.diocesanBishop=response.data
          // this.vicarName=response.data
          // this.asstVicarName=response.data
          // this.sextonName=response.data
          // this.latitude=response.data
          // this.longitude=response.data
          // window.location.reload();
          await this.getparishList()
        }
        catch(error){
          console.log(error)
        }
      },


    },
}

</script>

<style scoped>


.parishName{
  font-variant-caps: all-petite-caps;
    margin-top: 3px;
    margin-bottom: 10px;
    text-align: center;
    color: var(--color-dark);
    margin-left: -17%;
  /* text-transform: uppercase; */
  /* margin-bottom: 40px; */
}

.cd{
  /* margin-top: 14px; */
    width: 100%;
    padding: 4rem;
    /* border: 2px solid #c7c7c7; */
    /* border-radius: 3px; */
    /* box-shadow: inset 0px 0px 9px 2px #dddddd9e; */
    display: flex;
    justify-content: space-around;
}

.outerCard{
  /* padding: 20px; */
  display: block;
  justify-content: space-between;
  /* background: #fff; */
  /* padding: 2rem; */
  border-radius: 2px;
    width: 786px;

}

.address{
    display: flex;
    align-lists: center;
}

.card-title{
    margin-right: 20px;
}

.titleName{
    /* width: 105px; */
    width: 184px;
    display: flex;
    justify-content: flex-end;
}

.fill{
    color: #646464;
    margin-left: 5px;
    /* margin-bottom: 0px; */
}

.txtarea{
    max-width: 546px;
    /* min-width: 364px; */
    /* width: 500px; */
    height: fit-content;
    /* border-bottom: 1.5px solid #c7c7c7; */
    width: -webkit-fill-available;
}

.txtarea input{
    max-width: 546px;
    padding: 4px;
    width: 100%;
    text-overflow: ellipsis;

}

.editSpace{
  display: flex;
  justify-content:flex-end
}

.bttn{
  border: none;
  background: none;
}

.modal-body{
  /* display: flex; */
}

.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 90px;
}

.fillbox{
  /* margin-left: 12px; */
  height: 100%;
  width: 75%;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 5px;
}

.inputbox{
  width: 75%;
}

.inputField{
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}





@media (max-width: 650px) {

.news {
  /* display: block; */
}


}

</style>