function extractNumbers(inputString) {
  const splitString = inputString.split(",").filter((item) => item !== "");

  const areNumbers = splitString.every((item) => !isNaN(item));

  if (!areNumbers) {
    return [];
  }

  const numbers = splitString.map((item) => Number(item));

  return numbers;
}

export default extractNumbers;
