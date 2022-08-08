import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import PeopleSkeleton from './peopleSkeleton'
import ShowPeopleData from './showPeopleData'
import { getPeopleData } from '../../redux/reducers/people/peopleData'
import LoadingButton from '@mui/lab/LoadingButton'
import ShowVehiclesDetails from './showVehiclesDetails'
import SearchPeople from './searchPeople'
import NoDataFound from './noDataFound'
import './people.scss'

const People = () => {
  const dispatch = useDispatch()
  const {
    loading,
    data,
    next: nextPageUrl,
    totalCount,
  } = useSelector((state) => state.people)

  const fetchPeopleData = useCallback(() => {
    dispatch(getPeopleData({ url: nextPageUrl }))
    // eslint-disable-next-line
  }, [nextPageUrl])

  useEffect(() => {
    fetchPeopleData()
    // eslint-disable-next-line
  }, [])

  const displayLoadMoreButton = () => {
    if (totalCount && data.length === totalCount ) {
      return null
    }

    return (
      data.length !== totalCount && data.length > 0 ? (
        <div className={'show-more-button-container'}>
          <LoadingButton
            variant='contained'
            loading={loading}
            onClick={() => fetchPeopleData()}
            className={'show-more-button'}
          >
            Show More Results
          </LoadingButton>
        </div>
      ) : (
        <NoDataFound />
      )
    )
  }

  return (
    <div className={'people-container'}>
      <SearchPeople disable={loading}/>

      {loading && !totalCount && <PeopleSkeleton />}

      <Box className={'box-custom'}>
        <Grid container className={'grid-container'} spacing={2}>
          {data.length > 0 &&
            data.map(
              ({ name, height, mass, gender, edited, vehicles, url }, index) => {
                return (
                  <ShowPeopleData
                    key={`${name}-${height}-${mass}-${index}`}
                    name={name}
                    url={url}
                    height={height}
                    mass={mass}
                    edited={edited}
                    gender={gender}
                    vehicles={vehicles}
                  />
                )
              }
            )}
        </Grid>
      </Box>

      {!loading && displayLoadMoreButton()}

      <ShowVehiclesDetails />
    </div>
  )
}

export default People
