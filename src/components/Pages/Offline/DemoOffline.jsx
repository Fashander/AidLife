import React from 'react';
import Typography from '@material-ui/core/Typography'

const DemoOffline = () => {

    return (
        <div>
            <Typography variant='h3' color='error' display='block' align='center' >
                {('This Demo is offline').toUpperCase()}
            </Typography>
        </div>
    )
}

export default DemoOffline 