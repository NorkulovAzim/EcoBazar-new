// Product list
const products = [
  {
    name: "Green Apple",
    price: 14.99,
    image: "./assets/img/apple.svg",
    stars: "./assets/img/stars.svg",
    bag: "./assets/img/Bag.svg",
  },
  {
    name: "Chanise Cabbage",
    price: 14.99,
    image: "./assets/img/cappage.svg",
    stars: "./assets/img/stars.svg",
    bag: "./assets/img/Bag.svg",
  },
  {
    name: "Green Lettuce",
    price: 14.99,
    image: "./assets/img/lettuce.svg",
    stars: "./assets/img/stars.svg",
    bag: "./assets/img/Bag.svg",
  },
  {
    name: "Green Chili",
    price: 14.99,
    image: "./assets/img/chili.svg",
    stars: "./assets/img/stars.svg",
    bag: "./assets/img/Bag.svg",
  },
  {
    name: "Corn",
    price: 14.99,
    image: "./assets/img/corn.svg",
    stars: "./assets/img/stars.svg",
    bag: "./assets/img/Bag.svg",
  },
];

const container = document.querySelector(".feature-product");

products.forEach((product) => {
  const fruitBox = document.createElement("div");
  fruitBox.className = "fruits";

  const imgWrap = document.createElement("div");
  imgWrap.className = "fruits-img";
  const img = document.createElement("img");
  img.src = product.image;
  imgWrap.appendChild(img);

  const productWrap = document.createElement("div");
  productWrap.className = "product-wrap";

  const infoWrap = document.createElement("div");
  infoWrap.className = "fruits-wrap";

  const name = document.createElement("p");
  name.textContent = product.name;

  const price = document.createElement("span");
  price.textContent = `$${product.price.toFixed(2)}`;

  const stars = document.createElement("div");
  stars.className = "stars";
  const starsImg = document.createElement("img");
  starsImg.src = product.stars;
  starsImg.alt = "stars";
  stars.appendChild(starsImg);

  infoWrap.append(name, price, stars);

  const bagWrap = document.createElement("div");
  bagWrap.className = "fruits-bag";
  const link = document.createElement("a");
  link.href = "#";
  const bagImg = document.createElement("img");
  bagImg.src = product.bag;
  bagImg.alt = "bag";
  link.appendChild(bagImg);
  bagWrap.appendChild(link);

  productWrap.append(infoWrap, bagWrap);
  fruitBox.append(imgWrap, productWrap);

  container.appendChild(fruitBox);
});

//New products//
//--//
