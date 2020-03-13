import React,{useEffect, useState} from 'react'
import {API_URL, API_KEY, IMAGE_URL} from '../../Config'
import MainImage from '../LandingPage/Sections/MainImage'
import {Descriptions, Button, Row} from 'antd'
import GridCard from '../LandingPage/Sections/GridCard'

function MovieDetailPage(props) {

    const [Movie, setMovie] = useState([])

    const [crews, setCrew] = useState([])
   
    useEffect(() => {
        
     const movieId = props.match.params.movieId
      fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(res => {
        //   console.log(res)
        setMovie(res)

        //fetch Crew
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            
        //  setCrew(res.crew)
         setCrew(res.cast)
        })
          
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div>

            {/* Main movie image*/}
     { Movie && 
        <MainImage image={`${IMAGE_URL}w1280${Movie.backdrop_path && Movie.backdrop_path }`}
        title={Movie.original_title}
        text={Movie.overview}
        />
      }

      {/* Body*/}
      <div style={{width:'85%', margin:'1rem auto'}}>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
      <Button>Add to favorite</Button>
      </div>


       {/* Movie Info Table*/}
       <Descriptions title="Movie Info" bordered>
       <Descriptions.Item label="Title">{Movie.original_title}</Descriptions.Item>
       <Descriptions.Item label="release_date">{Movie.release_date}</Descriptions.Item>
       <Descriptions.Item label="revenue">{Movie.revenue}</Descriptions.Item>
       <Descriptions.Item label="runtime">{Movie.runtime}</Descriptions.Item>
       <Descriptions.Item label="vote_average" span={2}>
       {Movie.vote_average}
       </Descriptions.Item>
       <Descriptions.Item label="vote_count">{Movie.vote_count}</Descriptions.Item>
       <Descriptions.Item label="status">{Movie.status}</Descriptions.Item>
       <Descriptions.Item label="popularity">{Movie.popularity}</Descriptions.Item>
     </Descriptions>

     <div style={{display:'flex', justifyContent:'center', margin:'2rem'}}>
     <Button>Toggle Actors </Button>
     </div>

      {/* Grid Card for crews*/}
      <Row gutter={[16, 16]}>
      {crews && crews.map((crew, index) => (
        // eslint-disable-next-line no-unused-expressions
        <React.Fragment key={index}>
        {crew.profile_path &&
        <GridCard 
        actor
        image={`${IMAGE_URL}w500${crew.profile_path}`}
        />
        }
       
        </React.Fragment>
      ))}
     </Row>
      </div>
    </div>
    )
}

export default MovieDetailPage
