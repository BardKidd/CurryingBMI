/**
 *
 * @param height : number; Enter your height(Unit: M);
 * @param weight : number; Enter your weight(Unit: KG)。
 * @returns Your BMI object
 */
const bmiCalc = (height, weight) => {
  const calc = weight / (height * height);
  if (calc >= 35) {
    return {
      level: "重度肥胖",
      bmi: calc,
    };
  }
  if (30 <= calc && calc < 35) {
    return {
      level: "中度肥胖",
      bmi: calc,
    };
  }
  if (27 <= calc && calc < 30) {
    return {
      level: "輕度肥胖",
      bmi: calc,
    };
  }
  if (24 <= calc && calc < 27) {
    return {
      level: "過重",
      bmi: calc,
    };
  }
  if (18.5 <= calc && calc < 24) {
    return {
      level: "正常範圍",
      bmi: calc,
    };
  }
  if (calc < 18.5) {
    return {
      level: "體重過輕",
      bmi: calc,
    };
  }
};
const result = bmiCalc(1.8, 60);
console.log("bmiCalc", result);
