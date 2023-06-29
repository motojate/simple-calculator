<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-sm" flat bordered style="width: 50%">
      <q-card-section>
        <div class="text-h6 float-right">{{ calcViewResult }}</div>
      </q-card-section>
      <q-card-section class="q-pb-sm">
        <q-markup-table class="calc-table">
          <tr>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-7"
                label="AC"
                style="width: 100%"
                @click="settingCalculate('AC')"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-7"
                label="+/-"
                style="width: 100%"
                @click="settingCalculate('+/-')"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-7"
                label="%"
                style="width: 100%"
                @click="settingCalculate('%')"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="orange-7"
                label="/"
                style="width: 100%"
                @click="settingCalculate('/')"
              />
            </td>
          </tr>
          <tr>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="7"
                style="width: 100%"
                @click="settingCalculate(7)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="8"
                style="width: 100%"
                @click="settingCalculate(8)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="9"
                style="width: 100%"
                @click="settingCalculate(9)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="orange-7"
                label="*"
                style="width: 100%"
                @click="settingCalculate('*')"
              />
            </td>
          </tr>
          <tr>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="4"
                style="width: 100%"
                @click="settingCalculate(4)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="5"
                style="width: 100%"
                @click="settingCalculate(5)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="6"
                style="width: 100%"
                @click="settingCalculate(6)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="orange-7"
                label="-"
                style="width: 100%"
                @click="settingCalculate('-')"
              />
            </td>
          </tr>
          <tr>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="1"
                style="width: 100%"
                @click="settingCalculate(1)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="2"
                style="width: 100%"
                @click="settingCalculate(2)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="3"
                style="width: 100%"
                @click="settingCalculate(3)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="orange-7"
                label="+"
                style="width: 100%"
                @click="settingCalculate('+')"
              />
            </td>
          </tr>
          <tr>
            <td class="q-px-none" colspan="2">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="0"
                style="width: 100%"
                @click="settingCalculate(0)"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="grey-6"
                label="."
                style="width: 100%"
                @click="settingCalculate('.')"
              />
            </td>
            <td class="q-px-none">
              <q-btn
                square
                padding="lg"
                color="orange-7"
                label="="
                style="width: 100%"
                @click="settingCalculate('=')"
              />
            </td>
          </tr>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MyCalcStack } from 'src/common/models/MyCalcStack'
import { CalculatorModel } from 'src/common/models/Calculate'
import { OPERATE_ORDER, OPERATE_TYPE } from 'src/common/constants'

export default defineComponent({
  setup() {
    // const calcState = new MyCalcStack<number | string>()
    // const numberCalcState = new MyCalcStack<number>()
    // const operateCalcState = new MyCalcStack<string>()
    // const calcViewResult = ref<number>(0)

    // const settingCalculate = (val: number | string) => {
    //   if (typeof val === 'number')
    //     CalculatorModel.numberCalculate(numberCalcState, val)
    //   else
    //     CalculatorModel.operateCalculate(numberCalcState, operateCalcState, val)

    //   calcViewResult.value = numberCalcState.peek() ?? 0

    //   console.log(numberCalcState, operateCalcState)
    // }
    const calcViewResult = ref(0)
    class Calculator {
      private numberStack: number[]
      private operatorStack: string[]

      constructor() {
        this.numberStack = []
        this.operatorStack = []
      }

      public input(value: string): void {
        if (this.isNumber(value)) {
          this.processNumber(value)
        } else if (this.isOperator(value)) {
          this.processOperator(value)
        }
      }

      public getResult(): number | undefined {
        while (this.operatorStack.length > 0) {
          this.calculate()
        }

        if (this.numberStack.length === 1) {
          return this.numberStack[0]
        }

        return undefined // 계산 오류 발생
      }

      private isNumber(value: string): boolean {
        return /^[0-9]$/.test(value)
      }

      private isOperator(value: string): boolean {
        return /^[-+*/]$/.test(value)
      }

      private processNumber(value: string): void {
        if (
          this.operatorStack.length === 0 ||
          this.operatorStack[this.operatorStack.length - 1] === '='
        ) {
          this.numberStack.push(Number(value))
        } else {
          const previousNumber: any = this.numberStack.pop()
          const newNumber = Number(previousNumber.toString() + value)
          this.numberStack.push(newNumber)
        }
      }

      private processOperator(value: string): void {
        if (
          this.operatorStack.length === 0 ||
          this.operatorStack[this.operatorStack.length - 1] === '='
        ) {
          this.operatorStack.push(value)
        } else {
          const topOperator = this.operatorStack[this.operatorStack.length - 1]
          if (
            this.getOperatorPriority(value) <=
            this.getOperatorPriority(topOperator)
          ) {
            this.calculate()
          }
          this.operatorStack.push(value)
        }
      }

      private getOperatorPriority(operator: string): number {
        switch (operator) {
          case '+':
          case '-':
            return 1
          case '*':
          case '/':
            return 2
          default:
            return 0
        }
      }

      private calculate(): void {
        const operator = this.operatorStack.pop()
        if (operator === '=') return

        const operand2 = this.numberStack.pop()
        const operand1 = this.numberStack.pop()

        if (operand1 !== undefined && operand2 !== undefined) {
          let result: number
          switch (operator) {
            case '+':
              result = operand1 + operand2
              break
            case '-':
              result = operand1 - operand2
              break
            case '*':
              result = operand1 * operand2
              break
            case '/':
              result = operand1 / operand2
              break
            default:
              throw new Error('Invalid operator')
          }

          this.numberStack.push(result)
        }
      }
    }

    // 사용 예시
    const calculator = new Calculator()
    const settingCalculate = (val: any) => {
      calculator.input(val)
      calcViewResult.value = calculator.getResult() as number
    }
    calculator.input('1')
    calculator.input('3')
    calculator.input('+')
    calculator.input('2')
    calculator.input('*')
    calculator.input('5')
    calculator.input('-')
    calculator.input('4')
    calculator.input('=')
    console.log(calculator.getResult()) // 출력: 19

    const state = {
      calcViewResult,
    }
    const active = {
      settingCalculate,
    }

    return {
      ...state,
      ...active,
    }
  },
})
</script>

<style lang="scss" scoped>
.q-px-none {
  padding: 0px;
}
</style>
