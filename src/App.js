import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AllResults from './components/AllResults'
function App() {
    const [searchText, setSearchText] = useState('')  // continuously changing
    const [searchString, setSearchString] = useState('') // changes when search key is pressed
    const [videosInfo, setVideosInfo] = useState({})
    const [selectedVideoInfo, setSelectedVideoInfo] = useState({})
    const navigate = useNavigate();
    const API_KEY = 'key'
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
    }


    function handleVideoClick(newValue) {
        setSelectedVideoInfo(newValue)
        console.log('selectedVideoInfo', selectedVideoInfo)
        navigate('/videopage', {
            state: {
                videosInfo: videosInfo,
                selectedVideoInfo: newValue,
                searchText: searchText,
                handleChangeText: handleChangeText,     // if we comment handleChangeText and handleSearchSubmit, it works
                handleSearchSubmit: handleSearchSubmit 
            }
        })
    }


    return (
        <>
            <Header searchText={searchText} handleChangeText={handleChangeText} handleSearchSubmit={handleSearchSubmit} />
            <div className='pt-5 mt-5'>
                <AllResults videosInfo={videosInfo} handleVideoClick={handleVideoClick} />
            </div>
        </>
    );
}

export default App;
