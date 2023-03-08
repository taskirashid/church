<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Relationship</th>
                <th scope="col" class="middle">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">#</th>
                <td>{{item.relationship}}</td>
                <td class="middle">  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                </td>
              </tr>

              

                <!-- Modal -->

                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Relationship</h4>
                        </div>
                        <div class="modal-body">
                          <div class="titleName">
                              <h5 class="card-title">Relationship</h5>
                          </div>
                          <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.relationship">
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

export default {
  name: 'Relationship-',
  props: {
    msg: String,
    relationValue: Boolean,
  },
  data(){
      return{
        list: [],
        dataToUpdate: '',
      }
    },

    watch: {
      relationValue() {
        this.getRelationshipList()
      }
    },

    async mounted() {
       this.getRelationshipList()
    },
    methods: {
      async getRelationshipList() {
        const response = await axios.get(`/relationship/list`)
        console.log(response)
        console.warn(response.data.relationShipList)
        this.list=response.data.relationShipList
      },

      
      editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            relationship: this.dataToUpdate.relationship
          }
          const response = await axios.patch(`/relationship/update/${this.dataToUpdate.relationshipId}`, payload)
          console.log(response.data)
          console.warn(response.data.relationShipList)
          // this.relationship=response.data.relationShipList
          // window.location.reload();
          await this.getRelationshipList()
        }
        catch(error){
          console.log(error)
        }
      },



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


/* hr{
  border: 1px solid #dd9a2f;
} */



.bttn{
  border: none;
  background: none;
}

.modal-body{
  display: flex;
}

.modal{
  /* margin-top: 120px; */
}
.modal-dialog{
  margin-top: 160px;
}

.fillbox{
  padding-left: 8px;
  margin-left: 12px;
  height: 100%;
  width: 100%;
}
.inputbox{
  width: 75%;
}


</style>