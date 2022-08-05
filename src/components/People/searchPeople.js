import { useDispatch } from 'react-redux'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { customDebounce } from '../../utils/helper'
import { getPeopleData } from '../../redux/reducers/people/peopleData'

const SearchPeople = ({ disable }) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = customDebounce((e) => {
    const inputValue = e.target.value
    setInput(inputValue)
    if (inputValue && inputValue.trim()) {
      return dispatch(getPeopleData({ searchText: inputValue, isSearchFilterInput: true }))
    } 
    
    if (input && input.trim()) {
      dispatch(getPeopleData({ isSearchFilterInput: true }))
    }
  }, 600)

  return (
    <div className={'search-people-container'}>
      <TextField
        className={'textfield-root'}
        defaultValue={input}
        onChange={handleChange}
        disabled={disable}
        label='Search People'
        name='search'
        variant='standard'
      />
    </div>
  )
}

export default SearchPeople
