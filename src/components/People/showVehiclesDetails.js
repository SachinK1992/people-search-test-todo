import React from 'react'
import {
  Card,
  CardContent,
  Box,
  Grid,
  Modal,
  Button,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { clearVehiclesData } from '../../redux/reducers/people/vehiclesData'

const ShowVehiclesDetails = () => {
  const { loading, data: vehicles } = useSelector((state) => state.vehicles)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(clearVehiclesData())
  }

  return (
    <div className={'vehicles-detail-modal-container'}>
      <Modal
        open={!!vehicles.length && !loading}
        onClose={handleClose}
        className={'show-vehicles-modal'}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'>
        <Box className={'custom-box '} sx={{pt: 2, px: 4, pb: 3}}>
          <h2 id='parent-modal-title'>Vehicles Details</h2>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {
              vehicles.map(({ name, model, url, manufacturer, vehicle_class}) => (
                <Grid item xs={12} sm={12} md={12} key={url}>
                  <Card>
                    <h2>Name: {name}</h2>
                    <CardContent>Model: {model}</CardContent>
                    <CardContent>
                      Manufacturer: {manufacturer}
                    </CardContent>
                    <CardContent>
                      Vehicle Class: {vehicle_class}
                    </CardContent>
                  </Card>
                </Grid>
            ))}
          </Grid>
          <br />
          
            <Button 
              className={'close-button'}
              variant='contained'
              onClick={handleClose}>
              Close
            </Button>
          
        </Box>
      </Modal>
    </div>
  )
}

export default ShowVehiclesDetails
