import groupByKey from './groupBy'

enum Gender {
  Male,
  Female,
}

const result = groupByKey(
  [
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
  (el) => el.g
)

console.log("Result: ")
for (let [key, value] of result) {
  console.log(key + ' : ' + JSON.stringify(value))
}
