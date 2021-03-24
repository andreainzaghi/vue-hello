new Vue({
  el:'#root',
  data: {
    test:'Andrea',
    img: 'img/OIP.jfif',
    text:function(){
      alert("ciao");
    },
   metods:{
      color:'hello',
      cambia:function(){
        this.cambia='blue';
      }
    }
  }
});
