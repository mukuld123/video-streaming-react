import React,{useContext} from 'react'

import yt_logo from './images/header/yt-logo.png'
import search_img from "./images/header/search.png"
import VideoContext from './VideoContext'

function Header(props) {
    const context = useContext(VideoContext)
    const handleChangeText = context['handleChangeText']
    const handleSearchSubmit = context['handleSearchSubmit']
    const {searchText} = props
    return (
        <div className='header'>
            <div class="header__logo">
                <a href="/">
                    <img src={yt_logo} alt="YouTube logo" class="header__yt-logo" />
                </a>
            </div>
            <div class="search">
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" id="search__input" placeholder="Search" value={searchText} onChange={handleChangeText} />
                    <a onClick={handleSearchSubmit}>

                        <img src={search_img} alt="Search Icon" class="search__icon" />
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Header