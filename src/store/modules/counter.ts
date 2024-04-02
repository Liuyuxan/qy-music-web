/*
 * @Author: 秋意微醺时
 * @Date: 2024-04-01 20:16:24
 * @Description: 请填写说明
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  address: string
  height: number
  direction: 'left' | 'right' | 'up' | 'down'
  names: string[]
}

const initialState: IState = {
  count: 100,
  message: 'Hello Redux',
  address: '重庆市',
  height: 1.88,
  direction: 'left',
  names: []
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
