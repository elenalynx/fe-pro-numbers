/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
  // __________1-й ВАРІАНТ____________
// export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
//
//   return (minFirst <= minSecond ? minFirst : minSecond)
//     * (maxFirst >= maxSecond ? maxFirst : maxSecond);
// };

  // __________2-й ВАРІАНТ____________
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {

    return Math.min(minFirst, minSecond)
      * Math.max(maxFirst, maxSecond);
  };

/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {

  return Math.PI * Math.pow(radius, 2);
};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {
  let roundingFactor = '1';
  for (let i = 0; i < accuracy; i += 1) {
    roundingFactor += '0';
  }
  roundingFactor = +roundingFactor;

  return Math.round(number * roundingFactor) / roundingFactor;
};

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
export const getFlooroCeil = (number) => {

  return Math.round(number) % 2 === 0 ? Math.floor(number) : Math.ceil(number);
};

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

// НЮАНС в описі останньої задачі - "...от какого и ДОООО какого числа.." Не повинно бути ДО, повинно бути ПО таке то число, тоді тести будуть коректні)))
