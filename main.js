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

// const getUserNames = (users) => {
//     const usersArray = users.map((user) => user.name);
//     return usersArray;
// };
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
//---------------------------------------------------#23(filter())----------------------------------------------------------------------
//Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) => {
//   let usersAge = [];
//   usersAge = users.filter((user) => user.age >= minAge && user.age <= maxAge);
//   return usersAge;
// };
//----------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------#24(filter())---------------------------------------------------------------------------
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
// const getUsersWithFriend = (users, friendName) => {
//     let listFriends = [];
//---------------------------1method--------------------------------
// listFriends = users.filter(
//     (user) => user.friends.includes(friendName) !== false
// );
//--------------------------2method----------------------------------
// for (let user of users) {
//     if (user.friends.includes(friendName)) {
//         listFriends.push(user);
//     }
// }
//-------------------------------------------------------------------
//     return listFriends;
// };
// console.log(getUsersWithFriend(array, "Goldie Gentry"));
//----------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------#25------------------------------------------------------------------
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// const getFriends = (users) => {
//     let allFriends = [];
//     allFriends = users.flatMap((user) => user.friends);
//     allFriends = allFriends.filter(
//         (friend, index, array) => array.indexOf(friend) === index
//     );

//     return allFriends;
// };
// console.log(getFriends(array));
//----------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#26-------------------------------------------------------------------
//Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// const getActiveUsers = (users) => {
//     let activeUsers = [];
//     activeUsers = users.filter((user) => user.isActive === true);
//     return activeUsers;
// };
//----------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#27-------------------------------------------------------------------
//Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// const getInactiveUsers = (users) => {
//   let notActiveUsers = [];
//   notActiveUsers = users.filter((user) => user.isActive === false);
//   return notActiveUsers;
// };
//----------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#28(find())-------------------------------------------------------------------
// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
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
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#29(find())-------------------------------------------------------------------
//Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
// const getUserWithEmail = (users, email) => {
//   const user = users.find((user) => user.email === email);
//   return user;
// };
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#30(every())-------------------------------------------------------------------
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInFirstIsOdd = firstArray.every(
//   (element) => element % 2 !== 0
// );

// const eachElementInSecondIsEven = secondArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   (element) => element % 2 !== 0
// );

// const eachElementInThirdIsEven = thirdArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInThirdIsOdd = thirdArray.every(
//   (element) => element % 2 !== 0
// );
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#31(every())-------------------------------------------------------------------
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive === true);
// };
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#32(some())-------------------------------------------------------------------
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(
//   (element) => element % 2 === 0
// );
// const anyElementInSecondIsOdd = secondArray.some(
//   (element) => element % 2 !== 0
// );

// const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 !== 0);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#33(some())-------------------------------------------------------------------
//Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive === true);
// };
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#34(reduce())-------------------------------------------------------------------
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((totalTime, time) => {
//     return totalTime + time;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#35(reduce())-------------------------------------------------------------------
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((totalTime, player) => {
//     return (totalTime += player.playtime / player.gamesPlayed);
// }, 0);
// console.log(totalAveragePlaytimePerGame);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#36(reduce())-------------------------------------------------------------------
//Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// const calculateTotalBalance = (users) => {
//     return users.reduce((totalBalance, user) => {
//         return totalBalance + user.balance;
//     }, 0);
// };

// console.log(calculateTotalBalance(array));
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#37(reduce())-------------------------------------------------------------------
//Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
// const getTotalFriendCount = (users) => {
//   return users.reduce((totalFriends, user) => {
//     return totalFriends + user.friends.length;
//   }, 0);
// };
//console.log(getTotalFriendCount(array));
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#38(sort())-------------------------------------------------------------------
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#39(sort())-------------------------------------------------------------------
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// const arr = [...releaseDates];
// const arr2 = arr.slice(" ");
// console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); //[2016, 2012, 2008, 1997, 1984, 1973, 1967]
// console.log(arr);
// console.log(arr2);
// console.log(arr === releaseDates);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#40(sort())-------------------------------------------------------------------
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#41(sort())-------------------------------------------------------------------
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

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
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.author.localeCompare(secondAuthor.author)
// );

// const sortedByReversedAuthorName = [...books].sort(
//     (firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author)
// );

// const sortedByAscendingRating = [...books].sort(
//     (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );

// const sortedByDescentingRating = [...books].sort(
//     (firstRating, secondRating) => secondRating.rating - firstRating.rating
// );
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#42(sort())-------------------------------------------------------------------
//Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
// const sortByAscendingBalance = (users) => {
//     return [...users].sort(
//         (firstBalance, secondBalance) =>
//         firstBalance.balance - secondBalance.balance
//     );
// };
// console.table(sortByAscendingBalance(array));
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#43(sort())-------------------------------------------------------------------
//Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
// const sortByDescendingFriendCount = (users) => {
//     return [...users].sort(
//         (firstBalance, secondBalance) =>
//         secondBalance.friends.length - firstBalance.friends.length
//     );
// };
// console.table(sortByDescendingFriendCount(array));
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#44(sort())-------------------------------------------------------------------
//Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
// const sortByName = (users) => {
//     return [...users].sort((firstName, secondName) =>
//         firstName.name.localeCompare(secondName.name)
//     );
// };
// console.table(sortByName(array));
//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------#45(sort())-------------------------------------------------------------------