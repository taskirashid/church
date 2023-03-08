<template>
    <div>
      <div class="vicarId">


        <div style="display: flex;">
          <img :src="message.photo" alt="">
          <!-- <img src="@/assets/ass.vicar.png" alt=""> -->
          
          <div>
            <h4>{{message.name}}</h4>
            <span class="vicarRoll">{{message.type}}</span>
          </div>
          
        </div>

      </div>
      <h6>{{message.message}}</h6>

      



    </div>
</template>

<script>

export default{
  data() {
    return {
        
    }
  },
  props:{
    message: [Object,String]
  },

}

</script>

<style scoped>



.vicarId{
  display: flex;
  justify-content: space-between;
}

.vicarId small {
    display: inline-block;
    color: #6e4a11;
    margin-top: -10px !important;
}

.vicarId div h4{
  margin-bottom: 0;
}

img{
  border-radius: 50%;
  margin-right: 1rem;
  width: 50px;
  height: 50px;
  object-fit: cover;
  /* height: fit-content; */
}

h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
    /* color: #fff; */
}
.vicarRoll{
    color: #979797;
    font-size: 13px;
}


</style>