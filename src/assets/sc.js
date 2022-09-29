function myFunction() {
  var a = "Hello India";
  let mid = document.getElementById("yyy");
  let i=0;
  setInterval(function(){
    if(i<a.length){
      mid.append(a[i])
      i++;
    }
  },50)
  return a;
  }