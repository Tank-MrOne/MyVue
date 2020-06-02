import {REQUESTING,REQUEST_SUCCESS,REQUEST_FAILD} from './mutationType'

export const mutations ={
    [REQUESTING](state){
        state.isFirst = false;
        state.isLoading = true ;
    },

    [REQUEST_SUCCESS](state , arrs){
        state.isLoading = false ;
        state.arrs = arrs
    },

    [REQUEST_FAILD](state,msg){
        state.isLoading = false ;
        state.errMsg = msg ;
    }
}