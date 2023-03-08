<template>
  <div class="viewDiv Committee viewht scroll">
    <committee-tab-nav :tabs="['Organisation', 'Position', 'Members']" :selected="selected" @selected="setSelected">
      
      <committee-tab :isSelected="selected === 'Organisation'">
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">
          <PostOrganisation @getOrgansiationList="getOrgansiationList"/>
          <OrganisationCard :organisationValue="organisationValue"/>
        </div>
      </committee-tab>

      <committee-tab :isSelected="selected === 'Position'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">
          <PostPosition @getPositionList="getPositionList"/>
          <PositionCard :positionValue="positionValue"/>
        </div>
      </committee-tab>

      <committee-tab :isSelected="selected === 'Members'">
        <!-- <h3>Assi-vicar2 Message</h3> -->
        <div class="vicar">
          <PostMembers @getMemberList="getMemberList"/>
          <MembersCard :memberValue="memberValue"/>
        </div>
      </committee-tab>

    </committee-tab-nav>
    <committee-tab/>
  </div>
  
</template>

<script>
import PostOrganisation from '@/components/Committe/Organisation/PostOrganisation.vue'
import OrganisationCard from '@/components/Committe/Organisation/OrganisationCard.vue'
import PostPosition from '@/components/Committe/Position/PostPosition.vue'
import PositionCard from '@/components/Committe/Position/PositionCard.vue'
import PostMembers from '@/components/Committe/Members/PostMembers.vue'
import MembersCard from '@/components/Committe/Members/MembersCard.vue'
import CommitteeTab from '@/components/Committe/Tabs/CommitteeTab.vue'
import CommitteeTabNav from '@/components/Committe/Tabs/CommitteeTabNav.vue'

export default{
  name: 'Committee-',
  components: {
    PostOrganisation,
    OrganisationCard,
    PostPosition,
    PositionCard,
    CommitteeTab,
    CommitteeTabNav,
    PostMembers,
    MembersCard,
},
  data() {
    return {
      selected: 'Organisation',
      organisationValue: false,
      positionValue: false,
      memberValue: false,
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
    getOrgansiationList() {
      this.organisationValue = !this.organisationValue
    },
    getPositionList() {
      this.positionValue = !this.positionValue
    },
    getMemberList(){
      this.memberValue = !this.memberValue
    },
  }

}

</script>

<style>




</style>













<!-- <template>
  <div class=" viewht scroll">

    <CommitteeCard/>

  </div>
</template>

<script>
import CommitteeCard from "@/components/Committe/CommitteeCard.vue";

export default {
  name: 'Committee-',
  components:{
    CommitteeCard
}
}

</script>

<style scoped>

.Committee{
    display: flex;
    justify-content: center;
    width: 100%;
}

.Committee{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
    background-size: cover;
    width: 100%;
    z-index: -99;
}


.announcement h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.announcement span{
  margin: 6px;
}

.announcement .antop{
  display: flex;
  justify-content: space-between
}



</style> -->