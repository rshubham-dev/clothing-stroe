let shop = document.getElementById('shop');

let shopItemsData = [{
    id: '01',
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-1.jpg"
}, 
{
    id: '02',
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-2.jpg"
}, 
{
    id: '03',
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-3.jpg"
},
{
    id: '04',
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-4.jpg"
}, 
{
    id: '05',
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-2.jpg"
},
{
    id: `06`,
    name: 'Casual Shirt',
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-1.jpg"
},
{
    id: '07',
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-4.jpg"
},
{
    id: `08`,
    name: 'Casual Shirt',
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-3.jpg"
}
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        return `
        <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="button">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""));
}

generateShop();

let increment = (id)=>{
    let selectedItem = id;
    basket.push({
        id: selectedItem.id,
        item: ,
    })
};
let decrement = (id)=>{
    let selectedItem = id;
    alert(selectedItem.id);
};
let update = ()=>{};