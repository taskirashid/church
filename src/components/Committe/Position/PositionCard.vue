<template>
    <div class="Committee">
  
      
      <div class="news ">
  
        <div class="committeeDiv">
          <div class="antop">
            <Position :positionValue="positionValue"/>
          </div>
            <hr>
        </div>
        
      </div>
  
    </div>
  </template>
  
  <script>
  import Position from "@/components/Committe/Position/Position.vue"
  
  export default {
    name: 'PositionCard-',
    props: {
      positionValue: Boolean
    },
    components:{
      Position 
    }
  }
  
  </script>
  
  <style scoped>

  h5{
    color: var(--main-color);
  }
  
  hr{
    border: 0.1px solid #dddddd;
  }


  .news{
    width: 100%;
  }

.committeeDiv{
  /* padding: 18px 20px 24px 23px; */
  /* padding: 8px 20px 24px 23px; */
  width: 100%;
  /* background: #fff; */
}

  </style>