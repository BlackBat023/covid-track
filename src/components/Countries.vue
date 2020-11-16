<template>
    <div class="countries-wrap">
        <div class="country-box">
            <ul class="country-card" v-for="country in this.data[1].data" :key="country">
                <li>
                    <h3 class="card-title">{{ country.country }}</h3>
                    <ul class="country-item">
                        <li>Total Cases: {{ country.cases }}</li>
                        <li>Active Cases: {{ country.active }}</li>
                        <li>Critical Cases: {{ country.critical }}</li>
                        <li>Deaths: {{ country.deaths }}</li>
                        <li>Recovered: {{ country.recovered }}</li>
                        <li>Tests Done: {{ country.tests }}</li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: "Countries",
    props:{
        data: Array
    },
    computed:{
        ...mapState(['data'])
    },
    methods: {
        ...mapActions(['getData'])
    },
    mounted(){
        this.getData();
    }
    
    
}
</script>

<style scoped>
.countries-wrap {
    margin: 0;
}

.country-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
}

.country-card {
    background-color: rgba(84, 106, 231, 0.5);
    margin: 2.1%;
    list-style: none;
    font-weight: 500;
    font-size: 16px;
    padding: 2.5%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    box-shadow: -1px 2px 2px 3px rgba(0, 0, 0, 0.7);
}

.country-item {
    list-style: none;
    margin: 0;
    text-align: center;
}
</style>