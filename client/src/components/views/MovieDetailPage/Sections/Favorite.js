import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Favorite(props) {

    const [favoriteNumber, setFavoriteNumber] = useState(0)

    const variable ={
        userFrom :props.userFrom,
        movieId:props.movieId,
        movieTitle:props.movieInfo.original_title ,
        movieImage:props.movieInfo.backdrop_path ,
        movieRunTime:props.movieInfo.runtime
    }
    
    useEffect(() => {
      axios.post('/api/favorite/favoriteNumber', variable)
      .then(res => {
          if(res.data.success){
             setFavoriteNumber(res.data.favoriteNumber)
          } else{
              alert('Failed to get favoriteNumber')
          }
      })
    }, [variable])

    return (
        <div>
        <button>Add to favorite</button>
        </div>
     
    )
}

export default Favorite
