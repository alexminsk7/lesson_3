'use strict';

// глобальные переменные
let myMoney, myTime;

// создаем функцию для вызова вопросов
function start() {
   myMoney = +prompt("Ваш бюджет на месяц ?", '');
   myTime = prompt("Введите дату в формате YYYY-MM-DD", '');

   while (isNaN(myMoney) || myMoney == "" || myMoney == null) {
      myMoney = +prompt("Ваш бюджет на месяц ?", '');
   }
}
start();

// создаем объект
let appData = {
   moneyData: myMoney,
   timeData: myTime,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true
};

// создаем функцию для определения обязательных расходов
function chooseExpenses() {

   // создаем цикл с вопросами для пользователя
   for (let i = 0; i < 2; i++) {
      let a = prompt('Какая статья расходов?', '');
      let b = +prompt('Во сколько обойдется?', '');

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
         a != '' && b != '' && a.length < 50) {
         console.log('done');
         appData.expenses[a] = b;

      } else {
         i--;
      }
   }
}
chooseExpenses();

// через while  
// let i = 0;
// while (i < 2) {
//    let a = prompt('Какая статья расходов?', '');
//    let b = +prompt('Во сколько обойдется?', '');
//    i++;

//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//       a != '' && b != '' && a.length < 50) {
//       console.log('done');
//       appData.expenses[a] = b;

//    } else {
//       i--;
//    }
// 
// };

// через do while
// let i = 0;
// do {
//    let a = prompt('Какая статья расходов?', '');
//    let b = +prompt('Во сколько обойдется?', '');
//    i++;

//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//       a != '' && b != '' && a.length < 50) {
//       console.log('done');
//       appData.expenses[a] = b;

//    } else {
//       i--;
//    }
// } while (i < 2);

// создаем функцию для проверки депозита
function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
         percent = +prompt("Под какой процент?");

      appData.monthIncome = (save/100/12*percent).toFixed(2);
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
   }
}
checkSavings();

// создаем функцию для расчета дневного бюджета
function detectDayBudget() {
   appData.moneyPerDay = (appData.moneyData / 30).toFixed(2);
   alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

// создаем функцию для расчета уровня достатка
function detectLevel() {
   if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
   } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
   } else {
      console.log('Произошла ошибка');
   }
}
detectLevel();

// создаем функцию для определения необязательных расходов
function chooseOptExpenses() {

   for (let i = 1; i < 2; i++) {
      let a = prompt("Статья необязательных расходов?");
      let b = prompt("Статья необязательных расходов?");
      let c = prompt("Статья необязательных расходов?");

      if ((typeof (a, b, c)) === 'string' && (typeof (a, b, c)) != null &&
         a != '' && b != '' && c != '' && a.length < 50 && b.length < 50 && c.length < 50) {
         console.log('function works');
         
         appData.optionalExpenses[1] = a;
         appData.optionalExpenses[2] = b;
         appData.optionalExpenses[3] = c;

      } else {
         i--;
      }
   }
}
chooseOptExpenses();