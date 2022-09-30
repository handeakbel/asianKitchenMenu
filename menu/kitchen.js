const menu = [
{
    id: 1,
    category: "Korea",
    name: "Tteokbokki",
    price: 10.99,
    desc: "Spicy rice cakes, serving with fish cake.",
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
},
{
    id: 2,
    category: "Japan",
    name: "Chicken Ramen",
    price: 7.99,
    desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
},
{
    id: 3,
    category: "Korea",
    name: "Bibimbap",
    price: 8.99,
    desc: "Boiling vegetables, serving with special hot sauce.",
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
},
{
    id: 4,
    category: "China",
    name: "Dan Dan Mian",
    price: 5.99,
    desc: "Dan dan noodle, serving with green onion.",
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
},
{
    id: 5,
    category: "China",
    name: "Yangzhou Fried Rice",
    price: 12.99,
    desc: "Yangzhou style fried rice, serving with bean and pickles.",
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
},
{
    id: 6,
    category: "Japan",
    name: "Onigiri",
    price: 9.99,
    desc: "Rice sandwich, serving with soy sauce.",
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
},
{
    id: 7,
    category: "Korea",
    name: "Jajangmyeon",
    price: 15.99,
    desc: "Black bean sauce noodle, serving with green onion.",
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
},
{
    id: 8,
    category: "China",
    name: "Ma Ying Shang Shu",
    price: 12.99,
    desc: "Hot pepper sauce noodle, serving with soy bean and onion.",
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
},
{
    id: 9,
    category: "Japan",
    name: "Doroyaki",
    price: 3.99,
    desc: "Red bean paste dessert, serving with honey.",
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
},
];

const btnDOM = document.querySelector("#btn");
const menuDOM = document.querySelector("#menuitems");

const addButton = () => {
    let allbuttons = `
        <button type="button" id="all" class="btn btn-outline-dark">All</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" id="korea" class="btn btn-outline-dark">Korea</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" id="japan" class="btn btn-outline-dark">Japan</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" id="china" class="btn btn-outline-dark">China</button>    
    `
    btnDOM.innerHTML = allbuttons;
}
addButton();

const addMenu = (e) => {
    let foodMenu = `
        <div class="menu-items col-lg-6 col-sm-12">
            <img class="photo" src="${e.img}" alt="${e.name}">
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${e.name}</h4>
                    <h4 class="price">${e.price}</h4>
                </div>
                <div class="menu-text">${e.desc}</div>
            </div>
        </div>  
    `
    return foodMenu;
}
const listAllFoods = () => {
    let allFoods ="";
    menu.map(item => {
        allFoods += addMenu(item)
    })
    menuDOM.innerHTML = allFoods;
}
const listKoreaFoods = () => {
    let koreaFoods ="";
    menu.map(item => {
        if(item.category === "Korea") {
            koreaFoods += addMenu(item)
        }
    })
    menuDOM.innerHTML = koreaFoods;
}
const listJapanFoods = () => {
    let japanFoods ="";
    menu.map(item => {
        if(item.category === "Japan"){
            japanFoods += addMenu(item)
        }
    })
    menuDOM.innerHTML = japanFoods;
}
const listChinaFoods = () => {
    let chinaFoods ="";
    menu.map(item => {
        if(item.category === "China"){
            chinaFoods += addMenu(item)
        }
    })
    menuDOM.innerHTML = chinaFoods;
}

document.addEventListener("DOMContentLoaded",listAllFoods);
document.querySelector("#korea").addEventListener("click", listKoreaFoods);
document.querySelector("#japan").addEventListener("click", listJapanFoods);
document.querySelector("#china").addEventListener("click", listChinaFoods);