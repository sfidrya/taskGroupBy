export default function testGroupBy <T1, T2> (elements: Array<T1>, getKey: ((T1) => T2)) {
  const result = new Map <T2, Array<T1>>()

  for (const element of elements) {
    let key = getKey(element)
    let temple: Array<T1>

    if (result.has(key)) {
      temple = result.get(key)
    } else {
      temple = []
    }
    temple.push(element)
    result.set(key, temple)
  }

  console.log("Result: ")
  for (let [key, value] of result) {
    console.log(key + ' : ' + value)
  }

  return result
}