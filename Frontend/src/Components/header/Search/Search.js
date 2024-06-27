import React from 'react'

import "./Search.css"

const Search = () => {
    return (
            <div className="search order-2 order-md-0">
        <input type="text" name="search" placeholder="جستجو" />
        <button type="submit" className="btn btn-search fa fa-search"></button>
      </div>
    )
}

export default Search
