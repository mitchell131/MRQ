import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
}

const initialState: Item = {
  id:'',
};

const stockChartSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    updateSelectedId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    }
  }
});

export const { updateSelectedId } = stockChartSlice.actions;

export default stockChartSlice;
