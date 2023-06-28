export class MyCalcStack<T> {
  private stack: T[]
  private numberPointer: number
  private operationOrder: number

  constructor() {
    this.stack = []
    this.numberPointer = 0
    this.operationOrder = 0
  }

  push(item: T): void {
    this.stack.push(item)
  }

  pop(): T | undefined {
    return this.stack.pop()
  }

  getItem(index: number): T | undefined {
    return this.stack[index]
  }

  getPointer(): number {
    return this.numberPointer
  }

  setPointer(index: number): void {
    this.numberPointer = index
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1]
  }

  popFromIndex(index: number): number {
    return Number(this.stack.splice(index, 1)[0])
  }

  getOperateOrder(): number {
    return this.operationOrder
  }

  setOperateOrder(order: number): void {
    this.operationOrder = order
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  size(): number {
    return this.stack.length
  }

  clear(): void {
    this.stack = []
  }
}
