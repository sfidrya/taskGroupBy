export default function groupBy<
  T1,
  T2 extends number | string | symbol
>(elements: Array<T1>, getKey: ((T1) => T2)) {
  
  type Result = Partial<Record<T2, Array<T1>>>
  let result: Result = {}

  for (const element of elements) {
    let key = getKey(element)

    if (result[key]) {
      result[key][result[key].length] = element      
    } else {
      result[key] = [element]
    }
  }

  return result
}