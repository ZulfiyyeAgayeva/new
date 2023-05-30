document.querySelector('.btn').addEventListener('click', function() {
  const fetched = fetch('https://646ba3067d3c1cae4ce41664.mockapi.io/product',{
   method: "POST", // *GET, POST, PUT, DELETE, etc.
  
   headers: {
     "Content-Type": "application/json",
   },
  
   body: JSON.stringify({
    header: document.querySelector('#header').value ,
    text: document.querySelector('#text').value 

}
   ), 
})
fetched.then(res=>{
    (res.ok==true)
 document.querySelector('#header').value = '' ,
document.querySelector('#text').value = '' 
    alert('sended!');
}).catch(err=>console.log(err))

})
