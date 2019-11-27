<template>
  <div>
    <SampleComponent />
    <div>
      <h2>SpaceX Missions</h2>
      <button v-on:click="fetchData">Get Missions</button>
      <p v-if="isLoading == true">Loading.....fetching data from api</p>
      <div v-for="(launch,index) in allData" v-bind:key="index">
        <hr />
        <ul>
          <li>Mission Name : {{launch.mission_name}}</li>
          <li>Mission Year : {{launch.launch_year}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import SampleComponent from "../components/SampleComponent";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    SampleComponent
  },
  computed: {
    ...mapGetters(["allData", "isLoading"])
  },
  methods: {
    //   fetchData() {
    //       console.log("fetchdata in home component")
    //     this.$store.dispatch("fetchData");
    //   }
    ...mapActions(["fetchData"])
  },
  created() {
    // this.fetchData()
  }
};
</script>