import React,{useEffect} from 'react'
import axios from 'axios'

function Favorite(props) {

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
