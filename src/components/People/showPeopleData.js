import React from 'react'
import { formatDate } from '../../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { getVehiclesData } from '../../redux/reducers/people/vehiclesData'
import {
  CardContent,
  CardActions,
  Button,
  Paper,
  Grid
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import LoadingButton from '@mui/lab/LoadingButton'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ShowPeopleData = ({ name, height, mass, gender, edited, url, vehicles }) => {
  const dispatch = useDispatch()
  const { loading, selectedPeopleId } = useSelector((state) => state.vehicles)
  const showVehiclesDetails = () => {
    dispatch(getVehiclesData({ vehiclesData: vehicles, selectedPeopleId: `${url}` }))
  }

  return (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <Item className={'custom-grid-item'}>
        <CardContent>
          <span>Name : {name}</span>
        </CardContent>
        <CardContent>
          <span>Height : {height}</span>
        </CardContent>
        <CardContent>
          <span>Mass : {mass}</span>
        </CardContent>
        <CardContent>
          <span>Gender : {gender}</span>
        </CardContent>
        <CardContent>
          <span>Edited : {formatDate(edited)}</span>
        </CardContent>
        <CardActions>
          {
            vehicles.length > 0 
            ? (
              <LoadingButton
                variant='contained'
                loading={loading && url === selectedPeopleId}
                className={'vehicle-button'}
                fullWidth
                onClick={() => showVehiclesDetails()}
              >
                Show Vehicles Data &nbsp;
                <AirportShuttleIcon />
              </LoadingButton>
            ) : (
              <Button 
                variant='contained'
                fullWidth 
                disabled>
                No Vehicles Data Found
              </Button>
            )}
        </CardActions>
      </Item>
    </Grid>          
  )
}

export default React.memo(ShowPeopleData)
