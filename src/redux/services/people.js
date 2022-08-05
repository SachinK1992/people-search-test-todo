import axios from 'axios'

class People {
  static async getPeopleData({ url, searchText }) {
    let END_POINT = url || `${process.env.REACT_APP_SWAPI_BASE_URL}/people`
    if (searchText) {
      END_POINT = `${END_POINT}/?search=${searchText}`
    }
    return await axios.get(END_POINT)
  }
}

export default People
