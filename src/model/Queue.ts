export class Queue<T> {
  private items: T[]
  private pointer: number

  constructor() {
    this.items = []
    this.pointer = 0
  }

  enqueue(item: T): void {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    this.pointer++
    return this.items[this.pointer]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length
  }

  clear(): void {
    this.items = []
  }
}
