import React from 'react'
import {Link} from 'react-router-dom'

const Authors = () => {
    return(
        <div className="container">
            <div className="row">
            <h1 className="center">Authors (5)</h1><br/>
                <ul>
                    <Link to="/author/:id"><li>Name Surname</li></Link><br/><hr/>
                    <Link to="/author/:id"><li>Name Surname</li></Link><br/><hr/>
                    <Link to="/author/:id"><li>Name Surname</li></Link><br/><hr/>
                    <Link to="/author/:id"><li>Name Surname</li></Link><br/><hr/>
                    <Link to="/author/:id"><li>Name Surname</li></Link><br/><hr/>
                 </ul>
            </div>
        </div>
    )
}

export default Authors