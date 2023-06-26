import { Queue } from 'src/model/Queue'

export class CalculatorModel {
  static combine(queue: Queue<number | string>) {
    for (let i = 0; i < queue.size(); i++) {
      console.log(queue.dequeue())
    }
    return 1
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

export const OPERATE_TYPE: string[] = ['+', '-', '*', '/', '+/-', '%']
