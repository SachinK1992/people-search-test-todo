import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  data: [],
  selectedPeopleId: null
}

const {
  actions: {
    getVehiclesData,
    getVehiclesDataSuccess,
    getVehiclesDataFailure,
    clearVehiclesData
  },
  reducer,
} = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    getVehiclesData: (state, action) => ({
      ...state,
      loading: true,
      selectedPeopleId: action.payload.selectedPeopleId
    }),
    getVehiclesDataSuccess: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      selectedPeopleId: null
    }),
    getVehiclesDataFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.msg,
      selectedPeopleId: null
    }),
    clearVehiclesData: (state) => ({
      ...state,
      data: [],
      loading: false,
      selectedPeopleId: null
    })
  } 
})

export default reducer
export {
  getVehiclesData,
  getVehiclesDataSuccess,
  getVehiclesDataFailure,
  clearVehiclesData
}