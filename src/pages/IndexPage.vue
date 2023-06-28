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
import { MyCalcTree } from 'src/common/models/MyCalcTree'
import { CalculatorModel } from 'src/common/models/Calculate'
export default defineComponent({
  setup() {
    // const calcState = new MyCalcStack<number | string>()
    const calcState = new MyCalcTree<number | string>(0)
    const calcViewResult = ref<number>(0)

    const settingCalculate = (val: number | string) => {
      calcViewResult.value = CalculatorModel.calculate(calcState, val)
      console.log(calcState)
    }

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
