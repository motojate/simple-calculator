export class MyCalcStack<T> {
  private stack: T[]

  constructor() {
    this.stack = []
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
