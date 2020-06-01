import {REQUESTING,REQUEST_FAILD,REQUEST_SUCCESS} from "./mutationType" ;
export const actions = {
    sendValue({commit},val){
        commit(REQUESTING)
        axios({
            url:'https://api.github.com/search/users',
            method:"GET",
            params:{
                q:val
            }
        }).then(res =>{
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
            commit(REQUEST_SUCCESS,arrs)
        }).catch(err=>{
            commit(REQUEST_FAILD,err.message)
        })
    }
}