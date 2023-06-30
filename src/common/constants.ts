export const OPERATE_TYPE: string[] = ['+', '-', '*', '/']
export const OPERATE_UNIQUE_TYPE: string[] = ['AC', '=', '+/-', '%']

export const OPERATE_ORDER: { [key: string]: number } = {
  '*': 1,
  '/': 1,
  '+': 2,
  '-': 2,
  default: 3,
}
