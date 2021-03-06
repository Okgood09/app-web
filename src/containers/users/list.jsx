import React from 'react'
import { connect } from 'react-redux'

import { Box, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { animation } from '../../assets/styles/theme'

const useStyles = makeStyles({
    ...animation
})

const ListUserComponent = () => {

    const classes = useStyles()

    return <Box className={classes.fadeIn1}>
        <Paper>
            APP
        </Paper>
    </Box>
}

export default connect()(ListUserComponent)