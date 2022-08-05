import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  data: []
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
    getVehiclesData: (state) => ({
      ...state,
      loading: true
    }),
    getVehiclesDataSuccess: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    getVehiclesDataFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.msg
    }),
    clearVehiclesData: (state) => ({
      ...state,
      data: [],
      loading: false
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