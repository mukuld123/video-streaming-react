import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AllResults from './components/AllResults'
import VideoContext from './components/VideoContext';
import VideoPage from './components/VideoPage';


function App() {
    const [searchText, setSearchText] = useState('')  // continuously changing
    const [searchString, setSearchString] = useState('') // changes when search key is pressed
    const [currentPage, setCurrentPage] = useState('main') // can possess 'main' and 'video'
    const [videosInfo, setVideosInfo] = useState({})
    const [selectedVideoInfo, setSelectedVideoInfo] = useState({})
    const navigate = useNavigate();
    const API_KEY = 'AIzaSyAWeYu_7QPiSOaWVmvFGRcZTYpqRQMhWKc'
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchString}&type=video&part=snippet&maxResults=50`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVideosInfo(data)
            })

    }, [searchString])

    function handleChangeText(e) {
        setSearchText(e.target.value)
    }
    function handleSearchSubmit(e) {
        e.preventDefault()
        setSearchString(searchText)
        setCurrentPage('main')
    }


    function handleVideoClick(newValue) {
        setSelectedVideoInfo(newValue)
        console.log('selectedVideoInfo', selectedVideoInfo)
        setCurrentPage('video')
    }

    
    let context={
        handleChangeText:handleChangeText,
        handleSearchSubmit:handleSearchSubmit,
        handleVideoClick:handleVideoClick
    }
    return (
        <VideoContext.Provider value={context}>

            <Header searchText={searchText} />
            {
                (currentPage=='main')?<div className='pt-5 mt-5'>
                    <AllResults videosInfo={videosInfo} handleVideoClick={handleVideoClick} />
                </div>:<VideoPage videosInfo={videosInfo} selectedVideoInfo={selectedVideoInfo} searchText={searchText} />
            }
        </VideoContext.Provider>
    );
}

export default App;