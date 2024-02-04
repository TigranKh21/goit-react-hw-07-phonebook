import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: /* JSON.parse(localStorage.getItem('contacts')) ?? */ [],
  filterData: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filterData = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
