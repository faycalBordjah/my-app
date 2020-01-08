import axios from 'axios'

const loadMovies = async () => {
    const movies = await axios.get('http://www.omdbapi.com/?apikey=b502738f&s=matrix');
    const array = movies.data.Search.filter(mov => mov.Year > 2002).map(x => x.Title + '-' + x.Year);
    console.log(array);
};
export default loadMovies;
