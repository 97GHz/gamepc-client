import { Typography, Link } from '@mui/material';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {' from '}
            <Link color="inherit" href="https://github.com/97GHz">
                97GHz
            </Link>
        </Typography>
    );
}

export default Copyright;