import { useState } from 'react';
import SearchContext from './context/SearchContext';
import Header from './components/Header';
import Search from './components/Search';
import MovieContainer from './components/MovieContainer';

const App = () => {
    const [searchText, setSearchText] = useState('man');
    return (
        <SearchContext.Provider
            value={{ searchText: searchText, setSearchText: setSearchText }}
        >
            <div>
                <Header title="Get Movies" />
                <Search />
                <MovieContainer searchText={searchText} />
            </div>
        </SearchContext.Provider>
    );
};

export default App;