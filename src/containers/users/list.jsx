import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { animation } from '../../assets/styles/theme'

const useStyles = makeStyles({
    ...animation
})

export default function ListUser() {

    const { t } = useTranslation()

    const classes = useStyles()

    return <Box className={classes.fadeIn1}>
        <Paper>
            {t('APP')}
        </Paper>
    </Box>
}