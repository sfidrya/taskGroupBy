import groupBy from './groupBy'

const result1 = groupBy([1.2, 1.1, 2.3, 0.4], Math.floor)
console.log(JSON.stringify(result1))

const result2 = groupBy(["one", "two", "three"], (el: string): number => el.length)
console.log(JSON.stringify(result2))

enum Gender {
  Male,
  Female,
}

const result3 = groupBy(
  [
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
  (el) => el.g
)
console.log(JSON.stringify(result3))

