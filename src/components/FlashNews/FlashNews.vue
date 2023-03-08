<template>
    <div class="comp">
      <div class="flash">
        <h6>{{flashnewsData}}</h6>
      </div>
    </div>
</template>

<script>

export default {
  name: 'FlashNaws-',
  props: {flashnewsData: String}
}

</script>

<style>

.comp{
  padding-top: 8px;
}

.flash{
    display: flex;
    justify-content: space-between;
    /* padding: 2rem; */
    border-radius: 2px;
    color: var(--color-dark);
    /* margin-top: 5px; */
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2rem;
}


</style>