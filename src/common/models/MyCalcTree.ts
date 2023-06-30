// 트리 구조 비즈니스 로직 미사용

export class MyCalcTree<T> {
  value: T
  left: MyCalcTree<T> | null
  right: MyCalcTree<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }

  setRootNode(node: MyCalcTree<T>, data: T): void {
    this.value = data
    this.left = node
  }
}
