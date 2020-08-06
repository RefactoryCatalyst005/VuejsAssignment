new Vue({
    el:'#app',

    data:{
        signal: false

    },

    methods:{
        toggle: function(){
            this.signal = !this.signal;
        }
    }
})