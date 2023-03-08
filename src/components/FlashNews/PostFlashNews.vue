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
                  <h4 class="modal-title">Flash News</h4>
                </div>
                <div class="modal-body">
                  <div class="titleName">
                  <h5 class="card-title">News</h5>
                  </div>
                  <div class="inputbox">
                    <textarea class="fillbox" type="text" v-model="message"></textarea>
                
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


export default {
  data() {
    return {
      message: '',
      // dataToUpdate: []
    };
  },
  methods: {
    
    async submitForm() {
      try {
        console.log(this.message);
        
        const response = await axios.post('/flash-news/create', {txt: this.message});
        console.log(response.data);
        this.txt=response.data.news
        this.$emit('getFlashNewsList')

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
  /* display: flex; */
}

.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 140px;
}

.fillbox{
  padding-left: 8px;
  /* margin-left: 12px; */
  height: 150px;
  width: 100%;
}
.inputbox{
  width: 75%;
}


</style>