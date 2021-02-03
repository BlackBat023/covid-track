import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

const api = "https://corona.lmao.ninja/v3/covid-19/all";

const api2 = "https://corona.lmao.ninja/v3/covid-19/countries";

export const store = new Vuex.Store({
    state: {
        data: [],
    },
    mutations: {
        setData(state, data){
            state.data = data
        }
    },
    actions: {
        async getData({ commit }){
            let data = axios.get(api);
            let data2 = axios.get(api2);
            axios.all([data, data2])
            .then(axios.spread((...response) => {
                let resData = response;
                commit("setData", resData);
                console.log(resData);
            })
            )
            .catch(error => {
                console.log(error);
            })
            console.log(this.state.obj);
            
        },
    }
})