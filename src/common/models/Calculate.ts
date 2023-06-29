import { MyCalcStack } from 'src/common/models/MyCalcStack'
import { MyCalcTree } from 'src/common/models/MyCalcTree'
import { OPERATE_ORDER, OPERATE_TYPE } from 'src/common/constants'
export class CalculatorModel {
  static calculateModel = new CalculatorModel()

  static numberCalculate(stack: MyCalcStack<number>, data: number) {
    const combineNumber = this.calculateModel.combine(stack.pop() ?? 0, data)
    stack.push(combineNumber)
    return combineNumber
  }
  static operateCalculate(
    numberStack: MyCalcStack<number>,
    operateStack: MyCalcStack<string>,
    data: string
  ) {
    if (OPERATE_ORDER[operateStack.peek() ?? 'default'] > OPERATE_ORDER[data]) {
      operateStack.push(data)
      numberStack.push(0)
    } else {
      const beforeNumber = numberStack.pop() ?? 0
      const afterNumber = numberStack.pop() ?? 0
      const operate = operateStack.pop()
      switch (operate) {
        case '+':
          this.calculateModel.add(beforeNumber, afterNumber)
          console.log(this.calculateModel.add(beforeNumber, afterNumber))
          break
        case '*': {
          const a = this.calculateModel.mul(beforeNumber, afterNumber)
          console.log(a)
          break
        }
        case '/': {
          const a = this.calculateModel.div(beforeNumber, afterNumber)
          console.log(a)
          break
        }
        case '-': {
          const a = this.calculateModel.sub(beforeNumber, afterNumber)
          console.log(a)
          break
        }
      }
    }
  }

  combine(a: number, b: number): number {
    return a * 10 + b
  }

  operate(stack: MyCalcStack<number | string>) {
    return null
  }

  add(a: number, b: number): number {
    return a + b
  }

  sub(a: number, b: number): number {
    return a - b
  }

  mul(a: number, b: number): number {
    return a * b
  }

  div(a: number, b: number): number {
    return a / b
  }

  convert(a: number): number {
    return -a
  }
}
