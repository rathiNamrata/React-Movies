import { AppBar, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
  <AppBar position="static">
            <Toolbar
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', color:'blue', bgcolor: 'pink' }}
            >
                <Typography variant="h5" sx={{ textTransform: 'uppercase', fontFamily: 'cursive', fontWeight: 'bold'}}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
  );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header