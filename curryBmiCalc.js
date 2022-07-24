/**
 * 輸入某個值來設定 BMI 的區間，被輸入的值會為該區間的最大上限。
 * @param r 身高範圍
 * @param str 對應文字
 * @returns 對應文字
 */
const lessThan = (r) => (str) => str;

/**
 * BMI 計算機。帶入你得身高體重，也可以專門為某個人使用。
 * 直接使用 curryingBmiCalc(h)(w);
 * 賦予某人使用:
 * const person = curryingBmiCalc(h);
 * const result = person(w);
 * @param h 身高
 * @param w 體重
 * @returns level: BMI 對應文字；BMI: BMI 值。
 */
const curryingBmiCalc = (h) => (w) => {
  const calc = w / (h * h);
  let level = lessThan(w)("重度肥胖");
  if (calc < 35) level = lessThan(35)("中度肥胖");
  if (calc < 30) level = lessThan(30)("輕度肥胖");
  if (calc < 27) level = lessThan(27)("過重");
  if (calc < 24) level = lessThan(24)("正常範圍");
  if (calc < 18.5) level = lessThan(18.5)("體重過輕");
  if (calc < 0) level = lessThan(0)("資料錯誤");
  return {
    level,
    BMI: calc,
  };
};

const result2 = curryingBmiCalc(1.8)(60);
console.log("Curry Function", result2);
