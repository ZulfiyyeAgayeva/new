const box = document.querySelector('.esas');
    fetch('https://646ba3067d3c1cae4ce41664.mockapi.io/product')
    .then(res=>res.json())
    .then(res=>{
        box.innerHTML='',
        res.forEach(el=> {
            box.innerHTML += ` <div class="col-lg-4 col-md-12 text-center">
            <div></div>
            <h4 class="m-3">${el.header}</h4>
            <p>${el.text}</p>

        </div>`
        }).catch(err=>console.log(err))
    })
