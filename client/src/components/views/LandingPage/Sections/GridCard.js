import React from 'react'
import {Col} from 'antd'

function GridCard(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style={{position:'relative'}}>
            <a href={`/movie/${props.movieId}`}>
            <img src={props.image} alt="movie img" style={{width:'100%', height:'320px'}}/>
            </a>
            </div>
        </Col>
    )
}

export default GridCard
