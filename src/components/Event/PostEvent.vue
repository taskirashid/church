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
                  <h4 class="modal-title">Add Events</h4>
                </div>

                <div class="modal-body">

                  <div class="inputField">
                    <div class="titleName">
                    <h5 class="card-title">Time</h5>
                    </div>
                    <div class="inputbox">
                      <!-- <input class="titleInput" placeholder="09:00 AM" type="text" v-model="datetime"> -->
                       <vue-timepicker format="hh:mm A"  v-model="datetime"></vue-timepicker>
                    </div>
                  </div>

                  <div class="inputField">
                    <div class="titleName">
                    <h5 class="card-title">Date</h5>
                    </div>
                    <div class="inputbox">
                      <input class="titleInput" placeholder="01-12-2000" type="date" v-model="datedata">
                    </div>
                  </div>

                  <div class="inputField">
                    <div class="titleName">
                    <h5 class="card-title">Venue</h5>
                    </div>
                    <div class="inputbox">
                      <input class="titleInput" type="text" v-model="datevenue">
                    </div>
                  </div>

                  <div class="inputField">
                    <div class="titleName">
                    <h5 class="card-title">Event</h5>
                    </div>
                    <div class="inputbox">
                      <input class="titleInput" type="text" v-model="title">
                    </div>
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
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'


export default {
  components: {
    VueTimepicker
  },
  data() {
    return {
      datedata: '',
      datetime: '',
      datevenue: '',
      title: ''
      // dataToUpdate: []
    };
  },
  methods: {
    
    async submitForm() {
      try {
        // console.log(this.message);
        
        const response = await axios.post('/event/add-event', {
          date: this.datedata, 
          time: this.datetime, 
          venue: this.datevenue, 
          eventTitle: this.title,
        });
        console.log(response.data);
        this.date=response.data.news
        this.time=response.data.news
        this.venue=response.data.news
        this.eventTitle=response.data.news
        this.$emit('getEventsList')
        
        } catch (error) {
            console.error(error);
        }
    }

  }
};

</script>


<style scoped>

::placeholder {
  color: rgb(190, 190, 190);
}

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


.vue__time-picker {
    width: auto;
    border-radius: 3px;
    border: 1px solid #c7c7c7;
}


</style>