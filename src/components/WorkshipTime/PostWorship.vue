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
                  <h4 class="modal-title">Add Worship time</h4>
                </div>
                <div class="modal-body">

                  <div class="fillset">
                    <div class="titleName">
                        <h5 class="card-title">Time :</h5>
                    </div>
                    <div class="inputbox">
                        <!-- <input class="titleInput" type="text" v-model="time" > -->
                       <vue-timepicker format="hh:mm A"  v-model="time"></vue-timepicker>
                    </div>
                  </div>
                  <div class="fillset">
                    <div class="titleName">
                        <h5 class="card-title">Day :</h5>
                    </div>
                    <div class="inputbox">
                        <input class="titleInput" type="text" v-model="day" >
                    </div>
                  </div>
                  <div class="fillset">
                    <div class="titleName">
                        <h5 class="card-title">Title :</h5>
                    </div>
                    <div class="inputbox">
                        <input class="titleInput" type="text" v-model="title" >
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
      message: '',
      dataToUpdate: [],
      time: '',
      day: '',
      title: '',
    };
  },

methods: {
  async submitForm() {
    try {
      console.log(this.message);
      const payload = {
        time: this.time,
        day: this.day,
        title: this.title
      }
      const response = await axios.post('/worship-time/create', payload);
      console.log(response.data);
      this.time=response.data.worshipTime
      this.day=response.data.worshipTime
      this.title=response.data.worshipTime
      this.$emit('getWorkshipList')

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
display: flex;
align-items: center;
border: none;
background: none;
}

.modal-body{
display: block;
}

.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 140px;
}

.fillset{
  display: flex;
    margin: 15px 0px 15px 0px;
}

.titleName{
    padding-right: 10px;
    width: 184px;
    display: flex;
    justify-content: flex-end;
}

.titleInput{
  height: 34px;
  width: 75%;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 5px;
}

.inputbox{
  width: 75%;
}


.vue__time-picker {
    width: auto;
    border-radius: 3px;
    border: 1px solid #c7c7c7;
}

@media (max-width: 650px) {
  
  .fillset{
    display: flex;
    justify-content: flex-end;
  }

  .titleName{
      width: fit-content;
  }
  .inputbox{
    width: 90%;
  }

  .titleInput{
      width: 80%;
  }

}



</style>