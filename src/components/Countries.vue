<template>
    <div class="countries-wrap">
        <div class="country-search container">
            <b-form-input size="sm" type="text" class="mr-sm-2" placeholder="Search..." v-model="search" ></b-form-input>
        </div>
        <div class="country-box">
            <table class="country-card" v-for="country in countryFilter" :key="country.countryInfo._id">
                <tr>
                    <th><h3 class="card-title">{{ country.country }}</h3></th>
                </tr>
                <td class="country-item">
                    <ul
                        :class="country.recovered >= country.deaths ? 'green' : 'red'"
                    >
                        <li>Total Cases:<br/> {{ country.cases }}</li>
                        <li>Active Cases:<br/> {{ country.active }}</li>
                        <li>Critical Cases:<br/> {{ country.critical }}</li>
                        <li>Deaths:<br/> {{ country.deaths }}</li>
                        <li>Recovered:<br/> {{ country.recovered }}</li>
                        <li>Tests Done:<br/> {{ country.tests }}</li>
                    </ul>
                </td>
            </table>
        </div>

    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: "Countries",
    data(){
        return{
            search: ''
        }
    },
    props:{
        data: [],
    },
    computed:{
        ...mapState(['data']),
        countryFilter: function(){
            return this.data[1].data.filter((value) => {
                return value.country.match(this.search)
            });
        }
    },
    methods: {
        ...mapActions(['getData']),
    },
    mounted(){
        this.getData();
    },
    
    
}
</script>

<style scoped>
.countries-wrap {
    margin: 0;
    align-items:center;
    max-width: 100vw;
}

.country-box {
    display: grid;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    grid-template-columns: auto auto auto auto;
    width: 100%;
}

.country-search {
    width: 100%;
    margin: 25px;
    align-content: center;
}

.country-card {
    background-color: rgba(84, 106, 231, 0.5);
    margin: 2.1%;
    font-weight: 500;
    font-size: 16px;
    padding: 2.5%;
    margin-left: auto;
    margin-right: auto;
    margin: 5.5%;
    border-radius: 10px;
    width: auto;
    height: auto;
}

.country-card:hover {
    transform: scale(1.1, 1.15);
    box-shadow: -1px 2px 2px 3px rgba(0, 0, 0, 0.7);
}

.country-item ul {
    transform: translate();
    margin: 0;
    text-align: center;
    color: #fff;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 2px;
}

.country-item ul li {
    display:inline-block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.country-item li {
    border-right: 1px solid thistle;
}

.country-item ul:first-child {
    border-bottom-left-radius: 10px;
}

.country-item ul:last-child {
    border-bottom-right-radius: 10px;
}

.green {
    background-color: green;
}

.red {
    background-color: red;
}
</style>