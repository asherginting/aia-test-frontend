import React, { useState } from 'react'
import axios from 'axios'

function Home() {
    const [tags, setTags] = useState("")
    const [data, setData] = useState([])

    const getImages = () => {
        axios.get(`https://aia-backend.herokuapp.com/images?format=json&${tags}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data.data);
            })
    }
    return (
        <>
            <div className='container text-center my-5'>
                <h1>List of Images</h1>
                <input type="text" placeholder='Search Image by Tag' className='form-control' value={tags} onChange={(e) => {
                    setTags(e.target.value)
                }} />
                <button type='submit' onClick={getImages} className='btn btn-primary my-2'>Search</button>
            </div>

            <div className="container">
                <div className="row text-center text-lg-start">
                    {data.map((value, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6" key={index}>
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.media.m} alt='tag-images' />
                            </div>
                        )
                    })}
                </div>
                <div className='container text-center my-5'>
                <button type='submit' className='btn btn-primary my-2'>Load More</button>
                </div>
            </div>
        </>
    )
}

export default Home

