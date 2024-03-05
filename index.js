
// первое задание написал в отдельном html файле под названием "task-1.html"

// Задание 3

// const login = prompt('your account :')

// if(login =="admin"){
//     const password = prompt("your password :")
//     if (password ==  "BlackOverlord"){
//         alert("Welcome!")
//     }
//     else if (password === null || password === ""){
//         alert("Login cancelled")
//     }
//     else{
//         alert("Wrong Password!")
//     }
// }
// else if(login === null || login === ""){
//     alert('Login cancelled')
// }
// else{
//     alert("Unknown user")
// }






// =============================================================





// Задание 4

// const drinks = ['milk', 'beer', 'beer', 'milk', 'milk']
// for (let i = 0;i < drinks.length;i++){
//     if (drinks[i] == "milk"){
//         console.log("good");
//     }
//     else{ // так как у нас в массиве только "beer" и "milk" то можно сразу написать else вместо else if ,а если в массиве будут и другие значения прописали бы else if 
//         console.log("bad");
//     }
// }





// =====================================================================









// Задание 5

// const symbol = prompt("введите ваш символ :")
// let height = 7;
// let width = 20;

// while(height > 0){
//     console.log(symbol.repeat(width));    
//     height -=1
// }











// ===========================================






// Задание 6

// const seconds = prompt("Введите количество секунд : ")

// const inHour = parseInt(seconds / 3600)

// if (inHour >= 5 ){
//     console.log(`${"Осталось"} ${inHour} ${"часов"}`);
// }
// else if (inHour >= 2){
//     console.log(`${"Осталось"} ${inHour} ${"часа"}`);
// }
// else if (inHour == 1){
//     console.log(`${"Остался"} ${inHour} ${"час"}`);
// }
// else {
//     console.log("Осталось менее часа");
// }







// ==============================================================







// Задание 7

// const a = Math.floor(Math.random() * 10)
// const b = Math.floor(Math.random() * 10)

// const answer = prompt(`${"What is"} ${a} ${'*'} ${b}${'?'} `)

// if(parseInt(answer) == a * b){
//     alert("You are correct!")
// }
// else{
//     alert("You are wrong");
// }







// ==================================================



                             // Доп. Задания


// 1. Упражнение "Сравнение чисел"


// const a = parseInt(prompt("введи первое число: "))     
// const b = parseInt(prompt("введи второе число: "))     
// switch (true) {
//     case a > b:
//         alert('первое число больше второго.')
//         break;

//     case a < b:
//         alert('второе число больше второго.')
//         break;
    
//     default:
//         alert('числа равны')
// }








// ======================================================






// 2. Упражнение "Сообщение в рамочке"

// const stroka = prompt("введите строку :")

// console.log("*".repeat(stroka.length + 4));
// console.log(`${'*'} ${stroka} ${'*'}`);
// console.log("*".repeat(stroka.length + 4));








// =====================================================









// 3. Упражнение "Количество жизни"

// const currentDate = new Date()

// var year = currentDate.getFullYear()
// var month = currentDate.getMonth() + 1    // Эта задача у меня не вышло,не понял как работать с введенными ползователем временем
// var day = currentDate.getDate()

// var formattedDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;

// const usersBirthDate = prompt('Введите свою дату рождения(с запятыми,год - месяц - день) :')

// const difference = formattedDate.getTime() - usersBirthDate.getTime()

// alert(difference)








// ===========================================================================






// 4. Упражнение "Среднее арифметическое"






// let count = 0 
// let sum = 0
// let massive = []
// let boolean = true 
// while(boolean){
//     const numbers = prompt()
//     if (numbers === null || isNaN(numbers) || parseInt(numbers) > 100 || parseInt(numbers) < 1){
//         boolean = false 
//     }
//     else{
//         massive.push(parseInt(numbers))
//         count += 1

//     }
// }
// console.log(count);
// for(let i = 0;i < count;i++){
//     sum += massive[i]
// }
// console.log('арифметическое среднее:',sum / count);







// ===================================================================================




// 5. Упражнение "Тест на таблицу умножения".

// let boolean = true 
// let countAll = 0
// let countCorrect = 0
// let countFailed = 0
// while(boolean){
//     let a = Math.floor(Math.random() * 10)
//     let b = Math.floor(Math.random() * 10)
//     const answer = prompt(`${"What is"} ${a} ${'*'} ${b}${'?'} `)
//     if (answer === null || answer === ""){
//         boolean = false 
//     }
//     else if(parseInt(answer) == a * b){
//         alert("You are correct!")
//         countCorrect += 1
//     }
//     else{
//         alert("You are wrong");
//         countFailed += 1 
//     }
//     countAll += 1
// }
// console.log('общее количество заданных вопросов :',countAll-1);
// console.log('количество правильных ответов :',countCorrect);
// console.log('количество неправильных ответов :',countFailed);






// ====================================================================









// 6. Задание "Проверка распределения генератора псевдослучайных чисел".


// let n = prompt('Number of samples:')
// let group_0__9 = []
// let group_10__19 = []
// let group_20__29 = []
// let group_30__39 = []
// let group_40__49 = []
// let group_50__59 = []
// let group_60__69 = []
// let group_70__79 = []
// let group_80__89 = []
// let group_90__99 = []
// while(n > 0){
//     let a = Math.floor(Math.random()*99)
//     switch (true) {
//         case (a >= 0 && a <=9):
//             group_0__9.push(a)
//             break;
//         case (a >= 10 && a <=19):
//             group_10__19.push(a)
//             break;
//         case (a >= 20 && a <=29):
//             group_20__29.push(a)
//             break;
//         case (a >= 30 && a <=39):
//         group_30__39.push(a)
//             break;
//         case (a >= 40 && a <=49):
//         group_40__49.push(a)
//             break;
//         case (a >= 50 && a <=59):
//         group_50__59.push(a)
//             break;
//         case (a >= 60 && a <=69):
//         group_60__69.push(a)
//             break;
//         case (a >= 70 && a <=79):
//         group_70__79.push(a)
//             break;
//         case (a >= 80 && a <=89):
//         group_80__89.push(a)
//             break;
//         case (a >= 90 && a <=99):
//         group_90__99.push(a)
//             break;
//     }
//     n -= 1
// }
// console.log("let group_0__9:",group_0__9.length)
// console.log("let group_10__19:",group_10__19.length) 
// console.log("let group_20__29:",group_20__29.length) 
// console.log("let group_30__39:",group_30__39.length) 
// console.log("let group_40__49:",group_40__49.length) 
// console.log("let group_50__59:",group_50__59.length) 
// console.log("let group_60__69:",group_60__69.length) 
// console.log("let group_70__79:",group_70__79.length) 
// console.log("let group_80__89:",group_80__89.length) 
// console.log("let group_90__99:",group_90__99.length) 






// Упражнение 7. 

// let n = prompt('введи длину массива: ') // по условии задачи длина строго четное,так что не буду проверять его на четность 

// let massive = []

// for (let i = 0; i < n;i++){
//     massive.push(Math.floor(Math.random() * 1000)) // для себя определю диапазон так
// }
// for (let i = 0; i < n;i++){
//     console.log(massive[i]);
// }

// let sum1 = 0
// let sum2 = 0

// for (let i = 0; i < n/2-1;i++){
//     sum1 += massive[i]
// }

// for (let i = n/2; i < n;i++){
//     sum2 += massive[i]
// }
// if (sum1 == sum2){
//     console.log('В числе X суммы первой и второй половины цифр равны');
// }
// else{
//     console.log('В числе X суммы первой и второй половины цифр не равны');
// }









// ===============================================================================








// Упражнение 8. 

// const massive = [10, 20, 30, 50, 235, 300, 475, 598] 
// for (let i = 0;i < massive.length;i++){
//     let stroka = String(massive[i])
//     // console.log(typeof(massive[i]),massive[i]);
//     if(stroka[0] == '1' || stroka[0] == '2' || stroka[0] == '5'){
//         console.log(massive[i]);
//     }  
// }







// ==================================================================================








// Упражнение 9. 

// let n = 1000
// let num = -1
// while(n >= 50){
//     n /= 2
//     num += 1
// }
// console.log(num);



