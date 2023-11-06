 const qrbox =document.getElementById('qrbox')
 const qrimage =document.getElementById("qrimage")
 const qrtext =document.getElementById("qrtext")
 const qrbtn =document.getElementById("qrbtn")


 qrbtn.addEventListener("click",()=>{
    if(qrtext.value.length>0){
        qrimage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;

        qrimage.style.height="200px"
        qrimage.style.width="200px"
        qrimage.style.borderRadius="10px"
       
    }
    else{
       qrtext.classList.add('error');
       setTimeout(()=>{
        qrtext.classList.remove("error")
       },2000)
    }
  
   
 })