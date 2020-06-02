const state = {
    arr : [],
    isFirst : true ,
    isLoading : false,
    errMsg : "" 
}

const mutations = {
    requesting(state){
        state.isFirst = false
        state.isLoading = true
    },
    request_success(state,arrs){
        state.isLoading = false
        state.arr = arrs
    },
    request_faild(state,msg){
        state.errMsg = msg
    }
}

const actions = {
    async sendValue(context,val){
        context.commit('requesting')
        try {
            let res = axios({
                url:'https://api.github.com/search/users',
                method:"GET",
                params:{
                    q:val
                }
            })
            let arrs = []
            res.data.items.forEach(item=>{
                
                let name = item.login ;
                let img = item.avatar_url ;
                let url = item.url ;
                let obj = {
                    name,img,url
                }
                arrs.push(obj)               
            })
            context.commit('request_success',arrs)
        } catch (error) {
            context.commit('request_faild',error.message)
        }
    }
}

const getters = {
    isFirst(state){
        return state.isFirst
    },
    isLoading(state){
        return state.isLoading
    },
    arr(state){
        return state.arr
    },
    errMsg(state){
        return state.errMsg
    }
}

export default new Vuex.Store({
    state,mutations,actions,getters
})