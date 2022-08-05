import axios from 'axios'

const getVehiclesPromises = ({ vehicleUrl }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(vehicleUrl)
      resolve(response.data)
    } catch(error) {
      reject()
    }
  })
}

export default class Vehicles {
  static async getAllVehicles({ vehiclesData }) {
    if (!(vehiclesData && vehiclesData.length)) {
      return
    }

    const vehiclesPromises = []
    vehiclesData.forEach((data) => {
      vehiclesPromises.push(() => getVehiclesPromises({ vehicleUrl: data }))
    })

    return Promise.all(vehiclesPromises.map((vehicles) => vehicles()))
  }
}
