<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :hotCityList="hotCitiesList" :allCities="allCities" :letter="letter"></city-list>
      <city-alphabet :CityAlphabet="allCities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      hotCitiesList: [],
      alphabetList: [],
      allCities: {},
      letter: String,
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      if (res.data.ret) {
        const result = res.data;
        console.log(result);
        this.hotCitiesList = result.data.hotCities;
        this.allCities = result.data.cities;
      }
    },
    handleLetterChange(para) {
      // console.log(para);
      this.letter = para;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
