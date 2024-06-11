import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import getMovies from '../apis/getMovies';
import Movie from './Movie';
import { Box, Typography, Grid } from '@mui/material';


const MovieContainer = ({ searchText }) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies(searchText);
                setMovies(data.Search)
            } catch (err) {
                console.log(err.message);
            } finally {
            }
        };
        fetchMovies();
    }, [searchText]);
    return (
 <Box mt={4}>
            {error && (
                <Typography variant="body1" color="error" gutterBottom>
                    {error}
                </Typography>
            )}
            <Grid container spacing={2} paddingLeft={5}>
                {movies.length > 0 &&
                    movies.map((movie) => (
                        <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
                            <Movie movie={movie} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};


export default MovieContainer;