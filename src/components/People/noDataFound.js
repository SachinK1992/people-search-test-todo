import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const NoDataFound = () => {
  return (
    <Box className={'no-data-box-custom'}>
      <Card className={'no-data-card-custom'}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            No data found
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default NoDataFound
