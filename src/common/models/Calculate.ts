import { MyCalcStack } from 'src/common/models/MyCalcStack'
import { OPERATE_ORDER, OPERATE_UNIQUE_TYPE } from 'src/common/constants'
export class CalculatorModel {
  private static readonly instance = new CalculatorModel()

  private constructor() {
    //
  }

  public static getInstance(): CalculatorModel {
    return this.instance
  }

  public static numberCalculate(stack: MyCalcStack<number>, data: number) {
    if (stack.getIsNewNumber() === true) {
      stack.push(data)
      stack.setIsNewNumberFalse()
    } else {
      const combineNumber = CalculatorModel.getInstance().combine(
        stack.pop() ?? 0,
        data
      )
      stack.push(combineNumber)
    }
  }
  public static operateCalculate(
    numberStack: MyCalcStack<number>,
    operateStack: MyCalcStack<string>,
    data: string
  ) {
    if (OPERATE_UNIQUE_TYPE.includes(data)) {
      switch (data) {
        case 'AC':
          numberStack.clear()
          operateStack.clear()
          numberStack.push(0)
          return
        case '+/-':
          const newNumber = CalculatorModel.getInstance().convert(
            numberStack.pop() ?? 0
          )
          numberStack.push(newNumber)
          numberStack.setIsNewNumberTrue()
          return
        case '.':
          return
        case '%':
          const percentageNumber = (numberStack.pop() ?? 0) / 100
          numberStack.push(percentageNumber)
          return
        case '=':
          if (operateStack.isEmpty() || numberStack.size() < 2) return

          while (1) {
            const afterNumber = numberStack.pop() ?? 0
            const beforeNumber = numberStack.pop() ?? 0
            const operate = operateStack.pop() ?? ''
            const newNumeber = CalculatorModel.getInstance().operate(
              beforeNumber,
              afterNumber,
              operate
            )
            numberStack.push(newNumeber)
            if (operateStack.isEmpty()) break
          }
          return
      }
    }

    if (OPERATE_ORDER[operateStack.peek() ?? 'default'] > OPERATE_ORDER[data]) {
      operateStack.push(data)
      numberStack.setIsNewNumberTrue()
    } else {
      const afterNumber = numberStack.pop() ?? 0
      const beforeNumber = numberStack.pop() ?? 0
      const operate = operateStack.pop() ?? ''
      const newNumeber = CalculatorModel.getInstance().operate(
        beforeNumber,
        afterNumber,
        operate
      )
      numberStack.push(newNumeber)
      operateStack.push(data)
      numberStack.setIsNewNumberTrue()

      if (operateStack.size() >= 2) {
        const operateData = operateStack.pop() ?? ''
        if (
          OPERATE_ORDER[operateStack.peek() ?? 'default'] ===
          OPERATE_ORDER[operateData]
        )
          this.operateCalculate(numberStack, operateStack, operateData)
        else operateStack.push(operateData)
      }
    }
  }

  private combine(a: number, b: number): number {
    return a * 10 + b
  }

  private operate(a: number, b: number, op: string): number {
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

  private add(a: number, b: number): number {
    return a + b
  }

  private sub(a: number, b: number): number {
    return a - b
  }

  private mul(a: number, b: number): number {
    return a * b
  }

  private div(a: number, b: number): number {
    return a / b
  }

  private convert(a: number): number {
    return -a
  }
}
