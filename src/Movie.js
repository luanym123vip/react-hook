import './Movie.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Movie = () => {
    const [dataMovie, setDataMovie] = useState([]);

    useEffect(() => {

        // = componentsDidmount
        axios.get('https://api.themoviedb.org/3/movie/610150/credits?api_key=9bb89316d8693b06d7a84980b29c011f&language=vi-%20%20VN').then(res => {
            let data = res && res.data && res.data.cast ? res.data.cast : [];
            setDataMovie(data)
        })


    }, []);

    return (

        < table >
            {console.log(dataMovie)}
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>

            </thead>
            <tbody>

                {
                    dataMovie && dataMovie.length > 0 &&
                    dataMovie.map((item, index) => {
                        return (
                            <tr key={item.cast_id}>
                                <td >{item.name}</td>
                                <td>{item.popularity}</td>
                                <td >{item.character}</td>
                            </tr>
                        )
                    })
                }

            </tbody>


        </ table>
    )
}

export default Movie;