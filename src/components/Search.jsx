import SearchContext from '../context/SearchContext';
import { useState, useContext } from 'react';
import { Box, TextField, Button } from '@mui/material';



const Search = () => {
    const [value, setValue] = useState('');
    const { setSearchText } = useContext(SearchContext);

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            return;
        }
        
        setSearchText(value);
        setValue('');
    };
    return (
        <Box
            component="form"
            onSubmit={submitHandler}
            sx={{ display: 'flex', alignItems: 'center', mt: 4 }}
    
        >
            <TextField
                label="Type Movie Name"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{ marginRight: 2, width: '100%'}}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ bgcolor: '#d24419',  margin: 2 }}
            >
                Search
            </Button>
        </Box>
    );
};

export default Search;