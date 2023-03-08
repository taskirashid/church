<template>
    <div class="Committee">
  
      
      <div class="news">
  
        <div class="wptime">
          <div class="topper">
            <h3>Events</h3>
            <PostEvent @getEventsList="getEventsList"/>
          </div>
          <!-- <h3>Events</h3> -->
          <div class="antop">
            <hr class="hrLine">
            <events :eventValue="eventValue"/>
          </div>
        </div>
        
      </div>
  
    </div>
  </template>
  
<script>
import Events from '@/components/Event/Events.vue'
import PostEvent from '@/components/Event/PostEvent.vue'
  
  export default {
    name: 'MainEvents-',
    components:{
        Events,
        PostEvent
    },
  data() {
    return {
      eventValue: false,
    }
  },
  methods: {
    getEventsList(){
      this.eventValue = !this.eventValue
    },
  }
  }
  
  </script>
  
  <style scoped>



.topper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topper h3{
  margin-top: 0px;
  margin-bottom: 0px;
}
.wptime{
  /* padding: 18px 20px 24px 23px; */
  width: 100%;
  /* background: #fff; */
}
  
  hr{
    border: 0.1px solid #dddddd;
  }


  .news{
    width: 100%;
  }

  .Committee{
    width: 100%;
  }

  </style>