// https://leetcode.com/problems/daily-temperatures/description/?envType=problem-list-v2&envId=9rt1jt27

function dailyTemperaturesHelper(temperatures, accumulator, result, pos) {
  if (!temperatures.length) {
    return result;
  }

  let first = temperatures.shift();

  const nextAccumulator = accumulator
    .filter((x) => first <= x.temp)
    .map((x) => ({ ...x, numOfDays: x.numOfDays + 1 }));
  const firstTempWarmerArr = accumulator.filter((x) => first > x.temp);

  firstTempWarmerArr.map((x) => (result[x.pos] = x.numOfDays + 1));
  nextAccumulator.push({ temp: first, numOfDays: 0, pos });

  return dailyTemperaturesHelper(
    temperatures,
    nextAccumulator,
    result,
    pos + 1,
  );
}

var dailyTemperatures = function (temperatures) {
  return dailyTemperaturesHelper(
    temperatures,
    [],
    Array(temperatures.length).fill(0),
    0,
  );
};

//const assert = require("assert");
import { deepEqual } from "assert";

deepEqual(
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
  [1, 1, 4, 2, 1, 1, 0, 0],
);
deepEqual(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
deepEqual(dailyTemperatures([30, 60, 90]), [1, 1, 0]);

// Edge cases
deepEqual(dailyTemperatures([]), []);
deepEqual(dailyTemperatures([30]), [0]);
deepEqual(dailyTemperatures([70, 70, 70, 70]), [0, 0, 0, 0]);
deepEqual(dailyTemperatures([90, 80, 70, 60]), [0, 0, 0, 0]);
deepEqual(dailyTemperatures([70, 70, 75, 70, 70]), [2, 1, 0, 0, 0]);
deepEqual(dailyTemperatures([0, 100, 0, 100]), [1, 0, 1, 0]);
deepEqual(
  dailyTemperatures([1, 2, 3, 4, 5, 4, 3, 2, 1]),
  [1, 1, 1, 1, 0, 0, 0, 0, 0],
);
