// fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
// .then(res =>res.json())

// .then(data => {
//     const food = data.meals[0]
//     const meal = `${food.strMeal}`
//     console.log(food)
//     console.log(meal);
// });

// const searchFood =() => {

//   const searchText = document.getElementById('search-field').value;
//   const url= `https://www.themealdb.com/api/json/v1/1/search.php?i=${searchText}`

//   fetch(url)
//    .then(res =>res.json())
//    .then(data => displayFood(data.data))
//    .catch(error => displayError('Something went Wrong!!'));   

// }
//   const displayFood= food => {

//   }

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => displayFoods(data.meals));

const displayFoods = foodItems => {
    const foodContainer = document.getElementById('foodItem')
    for (let i = 0; i < foodItems.length; i++) {
        const element = foodItems[i];
        //console.log(element);
        const foodDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = element.strMeal;
        const p = document.createElement('p');
        p.innerText = element.foodCategory;


        li.innerText = element.strMeal;
        ul.appendChild(li);

    }


}








