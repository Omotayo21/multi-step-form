import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice ({
    name :"Form",
    initialState : {
        selectedPlan: {
            name: '',
            price: 0,
        },
        isYearlySubscription : false,
        selectedAddon :[],
        total: 0,
          
},
       
    reducers: {
       toggleSubscription : (state) => {
        state.isYearlySubscription = !state.isYearlySubscription
       },
       selectPlan : (state, action) => {
        state.selectedPlan = action.payload;
        
      state.total = state.selectedPlan.price 
      },
   selectAddon: (state, action) => {
      const addonIndex = state.selectedAddon.findIndex(
        (addon) => addon.name === action.payload.name && addon.price === action.payload.price
      );

      if (addonIndex !== -1) {
        // The addon is already in the list, so remove it
        state.selectedAddon.splice(addonIndex, 1);
      } else {
        // The addon is not in the list, so add it
        state.selectedAddon.push(action.payload);
      }
      state.total =
        state.selectedPlan.price +
        state.selectedAddon.reduce((acc, addon) => acc + addon.price, 0);
    },
  
}});
export const {toggleSubscription, selectPlan, selectAddon} = formSlice.actions;
export default formSlice;