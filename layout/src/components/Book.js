// import React from 'react'

function Book({title, subtitle, author, isbn}) {
    return (
        <div className='col-sm-4'>
            <div className="card text-white bg-info" >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{subtitle}.</p>
                <p className="card-text"><small className="text-muted">{isbn}</small></p>
                <p className="card-text"><small className="text-muted">{author}</small></p>    
            </div>
        </div>
        </div>
    )
}

export default Book
