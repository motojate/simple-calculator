import { MyCalcStack } from 'src/common/models/MyCalcStack'
import { MyCalcTree } from 'src/common/models/MyCalcTree'
import { OPERATE_ORDER, OPERATE_TYPE } from 'src/common/constants'
export class CalculatorModel {
  static calculateModel = new CalculatorModel()

  static numberCalculate(stack: MyCalcStack<number>, data: number) {
    if (stack.getIsNewNumber() === true) {
      stack.push(data)
      stack.setIsNewNumberFalse()
    } else {
      const combineNumber = this.calculateModel.combine(stack.pop() ?? 0, data)
      stack.push(combineNumber)
    }
  }
  static operateCalculate(
    numberStack: MyCalcStack<number>,
    operateStack: MyCalcStack<string>,
    data: string
  ) {
    if (OPERATE_ORDER[operateStack.peek() ?? 'default'] > OPERATE_ORDER[data]) {
      operateStack.push(data)
      numberStack.setIsNewNumberTrue()
    } else {
      const beforeNumber = numberStack.pop() ?? 0
      const afterNumber = numberStack.pop() ?? 0
      const operate = operateStack.pop() ?? ''
      const newNumeber = this.calculateModel.operate(
        beforeNumber,
        afterNumber,
        operate
      )
      numberStack.push(newNumeber)
      operateStack.push(data)
      numberStack.setIsNewNumberTrue()
    }
  }

  combine(a: number, b: number): number {
    return a * 10 + b
  }

  operate(a: number, b: number, op: string): number {
    switch (op) {
      case '+':
        return this.add(a, b)
      case '-':
        return this.sub(a, b)
      case '*':
        return this.mul(a, b)
      case '/':
        return this.div(a, b)
      default:
        return 0
    }
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
