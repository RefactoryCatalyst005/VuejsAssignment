new Vue({
    //el property
        el:"#tv",
        //the data property
        data(){
            return {
                signal:false
            }
        },
        //methods
        methods:{
           toggle:function(){
              this.signal = !this.signal;
            }

        }
    });