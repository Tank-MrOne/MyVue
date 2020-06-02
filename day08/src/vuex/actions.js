import {REQUESTING,REQUEST_FAILD,REQUEST_SUCCESS} from "./mutationType" ;
export const actions = {
    sendValue({commit},val){
        commit(REQUESTING)
        
    }
}