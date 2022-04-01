 getElementById("username").text;     
(function (){
  document.getElementById("accediBtn").addEventListener("click", setData());
  function setData(){
      set(ref(db,"Users"),{
          id:0,
          name:"ciao"
      });
  }
})