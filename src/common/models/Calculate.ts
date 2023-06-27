import { MyCalcStack } from 'src/common/models/MyCalcStack'

export class CalculatorModel {
  static calculate(stack: MyCalcStack<number | string>): number {
    const calculator = new CalculatorModel()
    if (typeof stack.peek() === 'number') return calculator.combine(stack)
    else {
      return calculator.operate(stack)
    }
  }

  combine(stack: MyCalcStack<number | string>): number {
    const numberBuffer: number[] = []
    const stackLength = stack.size()

    for (let i = stack.getPointer(); i < stackLength; i++) {
      numberBuffer.push(stack.pop() as number)
    }
    const combinedNumber = parseInt(numberBuffer.reverse().join(''), 10)
    stack.push(combinedNumber)

    return combinedNumber
  }

  operate(stack: MyCalcStack<number | string>) {
    return 1
  }

  add(a: number, b: number): number {
    return a + b
  }

  sub(a: number, b: number): number {
    return a - b
  }

  mul(a: number, b: number): number {
    return a - b
  }

  div(a: number, b: number): number {
    return a / b
  }

  convert(a: number): number {
    return -a
  }
}
