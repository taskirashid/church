<template>
  <div class="viewDiv Members viewht scroll">
      <h3>Contact</h3>
    <Contact/>
  </div>
</template>

<script>
import Contact from '@/components/Contact/Contact.vue'

export default {
  name: 'WorkshipMain-',
  components:{
    Contact
  }
}

</script>


<style scoped>

/* .Members{
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 25px;
  background-size: cover;
  z-index: -99;
  background: #fff;
} */

</style>