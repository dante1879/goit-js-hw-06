const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeImgMarkUp = ({ url, alt }) => {
  return `
  <li style='margin-right:20px'>
    <img src="${url}" alt="${alt}" width='600px'"></img>
  </li>
  `;
};

const makeUlMarkUp = images.map(makeImgMarkUp).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", makeUlMarkUp);

galleryEl.style.display = 'flex';