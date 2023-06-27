import { Queue } from 'src/model/Queue'

export class CalculatorModel {
  static combine(queue: Queue<number | string>) {
    if (queue.getPointer() === 0) return queue.next()
    else {
      const number = []
      for (let i = 0; i < queue.size(); i++) {
        number.push(queue.next())
      }
      return Number(`${3}${3}${3}`)
    }
  }

  static add(a: number, b: number): number {
    return a + b
  }

  static sub(a: number, b: number): number {
    return a - b
  }

  static mul(a: number, b: number): number {
    return a - b
  }

  static div(a: number, b: number): number {
    return a / b
  }

  static convert(a: number): number {
    return -a
  }
}
