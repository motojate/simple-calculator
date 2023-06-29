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
  static operateCalculate(stack: MyCalcStack<string>, data: string) {
    stack.push(data)
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
    return a - b
  }

  div(a: number, b: number): number {
    return a / b
  }

  convert(a: number): number {
    return -a
  }
}
