import { useState, useEffect } from "react";
import { searchMovies } from "../services/movieAPI";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const SearchResultPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery] = useSearchParams();
    const query = searchQuery.get("query");
    const [page, setPage] = useState(1);


    console.log("Query:", query);

    const fetchFilmByTitle = async (query, page) => {
        try {
            const response = await searchMovies(query, page);
            setMovies(response.data.results);
            console.log("Search results:", response.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChangePage = (_event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        fetchFilmByTitle(query, page);
    }, [query, page]);

    return (<>
        <h1>Résultats de recherche pour : "{query}"</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {movies.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
        <Pagination count={500} color="secondary" page={page} onChange={handleChangePage} />
    </>);
}

export default SearchResultPage;