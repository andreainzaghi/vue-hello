new Vue({
  el:'#root',
  data: {
    test:'Andrea',
    img: 'img/OIP.jfif',
     color:'hello'
  },
  methods: {
   text:function(){
     alert("ciao");
   },
   cambia:function(){
     this.color='blue';
   }
 }
});
