<template>
  <div class=" viewht scroll">
    
    <CardCount/>

    <div class="news">

      <div class="announcement frontCard" v-for="item in list" :key="item.id">
          <div class="antop">
            <h3>Announcement</h3>
            <a href="/AnnouncementPage">
              <div class="more">
                <h4>See all<span class="fas fa-chevron-circle-right"></span></h4>
              </div>
            </a>
          </div>
        <h5>{{item.title}}</h5>
          <Announcement :announcementData = 'item.body'/>
      </div>

      <div class="flashNews frontCard" v-for="item in flashlist" :key="item.id">
          <div class="antop">
            <h3>Flash News</h3>
            <a href="/FlashNews">
              <div class="more">
                <h4>See all<span class="fas fa-chevron-circle-right"></span></h4>
              </div>
            </a>
          </div>
          <FlashNews :flashnewsData = 'item.txt'/>
      </div>

    </div>

    <div class="msg">
        <div class="antop">
          <h3>Aachen's Messages</h3>
          <a href="/AachensMsg">
            <div class="more">
              <h4>See all<span class="fas fa-chevron-circle-right"></span></h4>
            </div>
          </a>
        </div>

        <OverviewAachans/>

    </div>

  </div>

</template>

<script>
import axios from '@/axios/axios'
import CardCount from '@/components/CardCount.vue'
import Announcement from '@/components/Announcement/Announcement.vue'
import OverviewAachans from '@/components/Aachens/OverviewAachens.vue'
import FlashNews from '@/components/FlashNews/FlashNews.vue'


// import MsgCard from '@/components/Aachens/MsgCard.vue' 
// import AsstMsgCard from '@/components/Aachens/AsstMsgCard.vue' 

export default {

  name: 'Overview-',
  components:{
    CardCount,
    Announcement,
    OverviewAachans,
    FlashNews,
    // MsgCard,
    // AsstMsgCard
  },

  data(){
      return{
        list: [],
        flashlist: [],
        // countlist: [],
      }
    },
    
    async mounted() {
       this.getAnnouncementList()
       this.getFlashNewsList()
      //  this.getCountList()

    },
    methods: {
      async getAnnouncementList() {
        const response = await axios.get(`/announcement/get-latest`)
        // console.log(response)
        // console.warn(response.data.latestAnnouncement)
        this.list=response.data.latestAnnouncement
      },
      async getFlashNewsList() {
        const response = await axios.get(`/flash-news/latest`)
        // console.log(response)
        // console.warn(response.data.news)
        this.flashlist=response.data.news
      },
      // async getCountList() {
      //   const response = await axios.get(`/dashboard/count`)
      //   console.log(response)
      //   console.warn(response.data.counts)
      //   this.countlist=response.data.counts
      // },
    },

  
}
</script>


<style scoped>


.main{
  background: #fff!important;
}

.news{
  column-gap: 20px;
}

.frontCard{
  background: var(--off-white);
  padding: 2rem;
  margin-top: 3rem;
  max-width: 50%;
    min-width: 48.5%;
}

.msg{
  background: var(--main-color);
  padding: 2rem;
  margin-top: 3rem;
}


.announcement h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.announcement span{
  margin: 6px;
}

.antop{
  display: flex;
  justify-content: space-between
}



.flashNews h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.flashNews span{
  margin: 6px;
}

.flashNews .antop{
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 20px; */
}

.news{
  margin-bottom: 20px;
}

.msg .vicar{
  background: #fff;
}



@media (max-width: 1024px) {

  .news {
    display: flex;
    /* display: block; */
  }
  
}


@media (max-width: 840px) {
  .news {
    /* display: flex; */
    display: block;
  }
  .frontCard{
    max-width: 100%;
  }
  
}


@media (max-width: 650px) {

  .news {
    display: block;
  }

  .frontCard{
    max-width: 100%;
  }
  

}

</style>