import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  data: [],
  totalCount: 0,
  next: null
}

const {
  actions: {
    getPeopleData,
    getPeopleDataSuccess,
    getPeopleDataFailure,
  },
  reducer,
} = createSlice({
  name: 'people',
  initialState,
  reducers: {
    getPeopleData: (state, action) => ({
      ...state,
      loading: true
    }),
    getPeopleDataSuccess: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload.isSearchFilterInput 
            ?  [...action.payload.peopleData] 
            :  [...state.data, ...action.payload.peopleData],
      next: action.payload.next,
      totalCount: action.payload.count
    }),
    getPeopleDataFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.msg
    }),
  } 
})

export default reducer
export {
  getPeopleData,
  getPeopleDataSuccess,
  getPeopleDataFailure
}
