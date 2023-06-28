import { MyCalcStack } from 'src/common/models/MyCalcStack'
import { MyCalcTree } from 'src/common/models/MyCalcTree'
import { OPERATE_ORDER, OPERATE_TYPE } from 'src/common/constants'
export class CalculatorModel {
  static calculate(tree: MyCalcTree<number | string>, data: number | string) {
    const calculator = new CalculatorModel()
    if (typeof tree.value === 'number' && typeof data === 'number') {
      const nodeValue = calculator.combine(tree.value, data)
      tree.value = nodeValue
      return nodeValue
    } else if (typeof data === 'string' && OPERATE_TYPE.includes(data)) {
      return calculator.makeTree(tree, data)
    } else if (typeof data === 'number' && typeof tree.value !== 'number') {
      return calculator.makeTree(tree, data)
    }
    if (!tree) return 1
    return 1
  }

  makeTree(tree: MyCalcTree<number | string>, data: string): number {
    if (typeof tree.value === 'number' && OPERATE_TYPE.includes(data)) {
      if (tree.left === null) {
        console.log(tree.value)
        const treeNode = new MyCalcTree(tree.value)
        tree.left = treeNode
        tree.value = data
      } else if (tree.right === null) {
        const treeNode = new MyCalcTree(tree.value)
        tree.right = treeNode
        tree.value = data
      } else {
        tree.setRootNode(tree, data)
        console.log(tree)
      }
    }

    return 1
  }

  // static calculate(stack: MyCalcStack<number | string>): number {
  //   const calculator = new CalculatorModel()
  //   const lastItem = stack.peek()
  //   if (typeof lastItem === 'number') return calculator.combine(stack)
  //   else if (typeof lastItem === 'string' && OPERATE_TYPE.includes(lastItem)) {
  //     const preOperateOrderIndex = stack.getOperateOrder()
  //     stack.setPointer(stack.size())
  //     stack.setOperateOrder(OPERATE_ORDER[lastItem])
  //     switch (lastItem) {
  //       case '+':
  //         if (preOperateOrderIndex === 2) {
  //         }
  //         break
  //       case '-':
  //         break
  //       case '/':
  //         break
  //       case '*':
  //         break
  //     }
  //   } else {
  //   }

  //   return 1
  // }
  combine(a: number, b: number): number {
    return a * 10 + b
  }

  // combine(stack: MyCalcStack<number | string>): number {
  //   const numberBuffer: number[] = []
  //   const stackLength = stack.size()

  //   for (let i = stack.getPointer(); i < stackLength; i++) {
  //     numberBuffer.push(stack.pop() as number)
  //   }
  //   const combinedNumber = parseInt(numberBuffer.reverse().join(''), 10)
  //   stack.push(combinedNumber)

  //   return combinedNumber
  // }

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
