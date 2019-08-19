

const state = {
    value:'',
};

const mutations = {
    setValue(store,prmar){
        store.value=prmar;
    }
};


const actions = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}