export class MyCalcStack<T> {
  private stack: T[]
  private isNewNumber: boolean

  constructor() {
    this.stack = []
    this.isNewNumber = true
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

  setIsNewNumberTrue(): void {
    this.isNewNumber = true
  }

  setIsNewNumberFalse(): void {
    this.isNewNumber = false
  }

  getIsNewNumber(): boolean {
    return this.isNewNumber
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1]
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
