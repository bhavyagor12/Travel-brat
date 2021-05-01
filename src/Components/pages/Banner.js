import React,{useState} from 'react'
import './Banner.css';
import { Button } from '@material-ui/core';
import SearchDates from '../SearchDates'

function Banner() {

    const [showSearch,setShowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <SearchDates/>}
                <Button onClick={()=>setShowSearch(!showSearch)} className='banner_searchButton'
                variant='outlined'>{showSearch? "Hide" : "Search Dates"}</Button>
            </div>
            <div className='banner__info'>
            <h1>Get out and strech your imaginationnn</h1>
            <h5>
                Plan a different kind of getaway to uncover the hidden gems near youu
            </h5>
            <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner