let container=document.querySelector('.container');

//append the box
function appendBox(data){
    let element=document.createElement('div');
    element.className="box";
    element.innerHTML=
    `    <div class="imagecontainer">
                <img src=https://picsum.photos/300/200?random=${data.id} alt="box1">
            </div>
            <div class="content">
                <span><span class="key">brand:</span>${data.brand}</span>
                <span><span class="key">category: </span>${data.category} </span>
                <span><span class="key">dimensions_cm: </span>${data.dimensions_cm} </span>
                <span><span class="key">id: </span>${data.id} </span>
                <span><span class="key">name: </span>${data.name}</span>
                <span><span class="key">price:</span>${data.price}</span>
                <span><span class="key">sku:</span>${data.sku} </span>
                <span><span class="key">stock: </span>${data.stock} </span>
                <span><span class="key">subcategory: </span>${data.subcategory}</span>
                <span><span class="key">tags: </span>${data.tags}</span>
                <span><span class="key">weight_kg: </span>${data.weight_kg}</span>
                <span><span class="key">description: </span>${data.description} </span>
            </div>
    `
    container.append(element)
}


let selctedBtn=document.querySelectorAll('input[type="radio]')

let checked="All"

async function main(){
    let x=await fetch("http://43.205.110.71:8000/items")
    let json=await x.json();
    json.forEach(e => {
            appendBox(e);
    });
}
main()

async function onOptionChange(event){
    container.innerHTML=``;
    checked=event.target.value;
    console.log(checked)
    let x=await fetch("http://43.205.110.71:8000/items")
    let json=await x.json();
    json.forEach(e => {
        if(checked != "All"){
             if(e.category === checked){
            appendBox(e);
        }
        }
        else{
            appendBox(e);
        }
    });
}

