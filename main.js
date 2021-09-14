//--------------------------------------------#2-----------------------
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// console.log(makeMessage("Selo", makePizza));
//------------------------------------------------------------------------------------
//-----------------------------------------#3-----------------------------------------
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line

//   makePizza("Ultracheese", function eatPizza(pizzaName){
//             console.log(`Eating pizza ${pizzaName}`)});
//----------------------------------------------------------------------------------
//----------------------------------------#4----------------------------------------
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if(this.pizzas.some(pizza => pizza == pizzaName)){
//             for(pizza of this.pizzas){
//                 if(pizza === pizzaName){
//                     return onSuccess(pizzaName)
//                 }
//             }
//         }else{
//             return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//         }
//     },
//   };
//   // Change code above this line

//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }

//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }

//   // Method calls with callbacks
//   console.table(pizzaPalace.pizzas);
//   console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
//-------------------------------------------------------------------------------------------
//------------------------------------#5(forEach)--------------------------------------------
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     //method 1
//     // orderedItems.forEach(function(item, i){
//     //   totalPrice += orderedItems[i]
//     // });
//-------------------------------------------------
//     //method 2
//     orderedItems.forEach ((item, i) =>
//         totalPrice += orderedItems[i]
//     );
//-------------------------------------------------
//     // Change code above this line
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([1,2,3,4,5]));
//-------------------------------------------------------------------------------------------
//----------------------------------#6forEach-------------------------------------------------------
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// const array = [10, 40, -23, 56, 150];
// const value = Math.floor(Math.random() * (150 - (-25)) - 25);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
// Change code below this line
//--------------------------Method1-----------------------------------
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
//--------------------------Method2-----------------------------------
// numbers.forEach(function(item, i){
//     if (item > value) {
//              filteredNumbers.push(numbers[i]);
//          }
// });
//--------------------------------------------------------------------
// Change code above this line
//     return filteredNumbers;
//   }
//   console.log(value);
//   console.log(filterArray(array, value));
//-----------------------------------------------------------------------------------------------
//----------------------------------#7-------------------------------------------------------
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// const array1 = [10, 40, -23, 56, 150];
// const array2 = [10, 432, 23, 56, 150];

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
// Change code below this line
//---------------------------Method1(for) ---------------
// for (let i = 0; i < firstArray.length; i += 1) {
//   if (secondArray.includes(firstArray[i])) {
//     commonElements.push(firstArray[i]);
//   }
// }
//------------------Method2(forEach)------------
// firstArray.forEach(function(item){
//     if (secondArray.includes(item)) {
//             commonElements.push(item);
//           }
// })
//------------------------------------------------

// return commonElements;
// Change code above this line
//   }
//   console.log(getCommonElements(array1, array2));
//-------------------------------------------------------------------------------------
//-------------------------------------#8(=>)--------#9--------------------------------------
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// function calculateTotalPrice(quantity, pricePerItem) {
//     // Change code above this line
//     return quantity * pricePerItem;
//   }
//-------------------------explicit return-----------------------------------------
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }
//---------------------------------------------------------------------------------

//-----------------------------implicit return(#9)-------------------------------------
//const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
//---------------------------------------------------------------------------------

//   console.log(calculateTotalPrice(23, 5));
//-----------------------------------------------------------------------------------------------
//-------------------------------------------#10-------------------------------------------------
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// const array1 = [10, 40, -23, 56, 150];
//---------------------------------------------------------------------------------------------
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });

//     return totalPrice;
//   }
//-----------------------------------------------------------------------------------------------
// const calculateTotalPrice = (orderedItems) => {
//         let totalPrice = 0;

//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
//     return totalPrice;
// }

//   console.log(calculateTotalPrice(array1));
//--------------------------------------------------------------------------------------------------
//----------------------------------------------#11-------------------------------------------------
//Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
//--------------------------------------------------------------------------------------------------
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }
//--------------------------------------------------------------------------------------------------
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }
//--------------------------------------------------------------------------------------------------
//-------------------------------------------#12----------------------------------------------------
//Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Change code above this line
//     return commonElements;
//   }
//-------------------------------------------------------------------------------------------------
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Change code above this line
//     return commonElements;
//   }
//------------------------------------------------------------------------------------------------
//-------------------------------------------#13---------------------------------------------------
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
// function changeEven(numbers, value) {
//     // Change code below this line
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//     // Change code above this line
//   }
//---------------------------------------------------------------------
//   const numbers = [1, 2, 3, 4, 5];

//   const changeEven = (numbers, value) => {
//     // Change code below this line
//     const array= []

//     numbers.forEach((number) => {
//         if (number % 2 === 0) {
//             array.push(number + value);
//           }else array.push(number);

//     })
//     return array;
// Change code above this line
//   }

//   const doubledNumbers = changeEven(numbers, 10);

// Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers);
//--------------------------------------------------------------------------------------------------
//-------------------------------------------#14(map())-----------------------------------------------------
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;
//-------------------------------------------------------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
//-----------------------------------------------------------------------------------------------------
//------------------------------------------#15(map())--------------------------------------------------------
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line

//   const titles = books.map(book => book.title);
//   console.log(titles);
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------#16(flatMap())---------------------------------------------------------
//Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line

//   const genres = books.flatMap(book => book.genres);
//   console.log(genres);
//--------------------------------------------------------------------------------------------------------------------
//----------------------------------------------#17-----------------------------------------------------------------
//Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

const getUserNames = (users) => {
    const usersArray = users.map((user) => user.name);
    return usersArray;
};
//-------------------------------------------------------------------------------------------------------------------
//---------------------------------------------#18-------------------------------------------------------------------
//Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// const getUserEmails = users => {

//     const emailArray = users.map(user => user.email)
//     return emailArray;
//     };
//-------------------------------------------------------------------------------------------------------------------
//---------------------------------------------#19-------------------------------------------------------------------
//Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
//-------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------#20-----------------------------------------------------------------
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//     (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres); //['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']
// console.log(uniqueGenres);//['adventure', 'history', 'fiction', 'mysticism', 'horror']
//-----------------------------------------------------------------------------------------------------------------------
//---------------------------------------------#21(filter())------------------------------------------------------------------------
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.table(topRatedBooks);
// console.log(booksByAuthor);
//----------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------#22(filter())------------------------------------------------------------
//Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
const array = [{
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
    },
];
// const getUsersWithEyeColor = (users, color) => {
//     let usersArray = [];
//     usersArray = users.filter((user) => user.eyeColor === color);
//     return usersArray;
// };
// console.log(getUsersWithEyeColor(array, "brown"));
//----------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------#23----------------------------------------------------------------------
//Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) => {
//   let usersAge = [];
//   usersAge = users.filter((user) => user.age >= minAge && user.age <= maxAge);
//   return usersAge;
// };
//----------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------#24---------------------------------------------------------------------------
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
const getUsersWithFriend = (users, friendName) => {
    let listFriends = [];
    for (let user in users) {
        listFriends = users.friends.filter((friend) => friend === friendName);
    }
    return listFriends;
};
console.log(getUsersWithFriend(array, "Goldie Gentry"));