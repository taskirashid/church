<template>
  <div class="viewDiv settings viewht scroll">
    <settings-tab-nav :tabs="['TermsConditions', 'PrayerGroup', 'Relationship']" :selected="selected" @selected="setSelected">
      
      <settings-tab :isSelected="selected === 'TermsConditions'">
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">
          <TermsConditions/>
        </div>
      </settings-tab>

      <settings-tab :isSelected="selected === 'PrayerGroup'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">
          <PrayerPost @getPrayerGroupList="getPrayerGroupList"/>
          <PrayerGroup :prayerValue="prayerValue"/>
        </div>
      </settings-tab>

      <settings-tab :isSelected="selected === 'Relationship'">
        <!-- <h3>Assi-vicar2 Message</h3> -->
        <div class="vicar">
          <PostRelationship  @getRelationshipList="getRelationshipList"/>
          <Relationship  :relationValue="relationValue"/>
        </div>
      </settings-tab>

    </settings-tab-nav>
    <settings-tab/>
  </div>
  
</template>

<script>
import TermsConditions from '@/components/Settings/TermsConditions/TermsConditions.vue'
import PrayerGroup from '@/components/Settings/PrayerGroup/PrayerGroup.vue'
import PrayerPost from '@/components/Settings/PrayerGroup/PrayerPost.vue'
import Relationship from '@/components/Settings/Relationship/Relationship.vue'
import PostRelationship from '@/components/Settings/Relationship/PostRelationship.vue'
import SettingsTab from '@/components/Settings/Tabs/SettingsTab.vue'
import SettingsTabNav from '@/components/Settings/Tabs/SettingsTabNav.vue'

export default{
  name: 'Settings-',
  components: {
    SettingsTab,
    SettingsTabNav,
    TermsConditions,
    PrayerGroup,
    PrayerPost,
    Relationship,
    PostRelationship,
},
  data() {
    return {
      selected: 'TermsConditions',
      prayerValue: false,
      relationValue: false,
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
    getPrayerGroupList(){
      this.prayerValue = !this.prayerValue
    },
    getRelationshipList(){
      this.relationValue = !this.relationValue
    },
  }

}

</script>

<style>

/* .settings{
  margin-top: 0px;
  padding: 18px 20px 24px 23px;
  background: #fff;
} */

</style>
