(function(w){
    const myVue = {};
    myVue.install = function(Vue,options){
        Vue.myMethod = function(){
            console.log("这是我的Vue全局函数");
        }

        Vue.directive('tank',function(el,binding){
            el.textContent = binding.value.toUpperCase()
        })

        Vue.prototype.$myTank = function(aaa){
            console.log("实例对象的方法")
        }
    }
    w.myVue = myVue;
})(window)