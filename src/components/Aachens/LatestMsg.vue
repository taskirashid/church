<template>
    <div>
      <div class="vicarId">


        <div style="display: flex;">
          <img src="@/assets/ass.vicar.png" alt="">
          
          <div v-for="item in flashlist" :key="item.id">
            <h4>{{vicarDetails}}</h4>
          </div>
        </div>


      </div>
      <h6 v-for="item in flashlist" :key="item.id">
        {{vicarDetails}}
    </h6>

      



    </div>
</template>

<script>

export default{
  props: {
    vicarDetails: [Object,String]
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
  height: fit-content;
}

h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
    /* color: #fff; */
}


</style>