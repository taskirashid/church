<template>
    <div class="comp">
        <div class="flash">
          <h6>{{announcementData}}</h6>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Announcement-',
  props: {announcementData: String}
  
}

</script>


<style scoped>


.flash{
    display: block;
    justify-content: space-between;
    border-radius: 2px;
    color: var(--color-dark);
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2rem;
}

/* hr{
  border: 1px solid #dd9a2f;
} */

</style>