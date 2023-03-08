<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Venue</th>
                <th scope="col">Event</th>
                <th scope="col" class="middle">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <td>{{getCreateDate(item.date)}}</td>
                <td>{{item.time}}</td>
                <td>{{item.venue}}</td>
                <td>{{item.eventTitle}}</td>
                <td class="middle editTrash">  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                  <button  v-on:click="deleteProduct(item.eventId)" type="button" class="bttn" >
                    <i class="fas fa-trash"></i>
                  </button>  
                </td>
              </tr>


              
                <!-- Modal -->

                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Event</h4>
                        </div>

                        <div class="modal-body">
                                                    
                          <div class="inputField">
                            <div class="titleName">
                            <h5 class="card-title">Time</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="titleInput" type="text" v-model="dataToUpdate.time"> -->
                              <vue-timepicker format="hh:mm A"  v-model="dataToUpdate.time"></vue-timepicker>
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
                            <h5 class="card-title">Venue</h5>
                            </div>
                            <div class="inputbox">
                              <input class="titleInput" type="text" v-model="dataToUpdate.venue">
                            </div>
                          </div>


                          <div class="inputField">
                            <div class="titleName">
                            <h5 class="card-title">Event</h5>
                            </div>
                            <div class="inputbox">
                              <input class="titleInput" type="text" v-model="dataToUpdate.eventTitle">
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
import moment from 'moment'
import axios from '@/axios/axios'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default {
  name: 'Events-',
  components: {
    VueTimepicker
  },
  props: {
    eventValue: Boolean,
  },
   data(){
      return{
        list: [],
        dataToUpdate: '',
        date: moment().format('YYYY-MM-DD')
      }
    },

    watch: {
      eventValue() {
        this.getEventsList()
      }
    },
    
    async mounted() {
       this.getEventsList()
    },
    methods: {
      async getEventsList() {
        const response = await axios.get(`/event/get-events`)
        console.log(response)
        console.warn(response.data.event)
        this.list=response.data.event
      },
      getCreateDate(date){
        return moment(date).format('DD-MM-YYYY')
      },

      
      editData(item){
        this.dataToUpdate={...item}
        this.dataToUpdate.date=moment(this.dataToUpdate.date).format('YYYY-MM-DD')
      },

      async updateData() {
        try{
          const payload = {
            eventTitle: this.dataToUpdate.eventTitle,
            date: this.dataToUpdate.date,
            time: this.dataToUpdate.time,
            venue: this.dataToUpdate.venue
          }
          const response = await axios.patch(`/event/update-event/${this.dataToUpdate.eventId}`, payload)
          console.log(response.data)
          // console.warn(response.data.event)
          // this.eventTitle=response.data.event
          // this.date=response.data.event
          // this.time=response.data.event
          // this.venue=response.data.event
          await this.getEventsList()
        }
        catch(error){
          console.log(error)
        }
      },

      async deleteProduct(eventId) {
          if(confirm("Do you really want to delete?")){
            axios.delete(`event/delete/`+eventId).then(()=>{
              this.getEventsList();
            })
          }
        }


    },
}

</script>


<style scoped>


.comp{
  padding-top: 8px;
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
  /* background-image: image(); */
}

.divImage input{
  display: none;
}




.vue__time-picker {
    width: auto;
    border-radius: 3px;
    border: 1px solid #c7c7c7;
}

/* .display-time {
    width: 100%;
    border: 3px solid red;
}
.vue__time-picker * {
    box-sizing: border-box;
} */

</style>