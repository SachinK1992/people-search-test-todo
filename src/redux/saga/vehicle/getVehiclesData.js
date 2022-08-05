import { takeLatest, put } from 'redux-saga/effects'
import {
  getVehiclesData,
  getVehiclesDataSuccess,
  getVehiclesDataFailure
} from '../../reducers/people/vehiclesData'
import { showErrorMessage } from '../../reducers/notification'
import Vehicles from '../../services/vehicles'
import { Errors } from '../../../utils/messages'

function* getVehiclesDataWatcher() {
  yield takeLatest(getVehiclesData.type, getVehiclesDataWorker)
}

function* getVehiclesDataWorker(action) {
  try {
    const response = yield Vehicles.getAllVehicles({ vehiclesData: action.payload.vehiclesData })
    yield put(getVehiclesDataSuccess(response))
  } catch (error) {
    yield put(getVehiclesDataFailure({ msg: error.message }))
    yield put(showErrorMessage({ message: Errors.default }))
  }
}

export default getVehiclesDataWatcher
