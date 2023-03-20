const categoriesItems = document.querySelectorAll("ul#categories li.item");
const numCategories = categoriesItems.length;

console.log(`Number of categories: ${numCategories}`);

categoriesItems.forEach((item) => {
    console.log(' ')
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
})
