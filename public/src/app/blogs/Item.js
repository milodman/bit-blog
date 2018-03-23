import React from 'react';
import {Link} from 'react-router-dom'
const Item =()=> {
      return (
         <div>
             <div class="col s12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                       <Link to="/posts/:id"> <h4> <span class="card-title">Card Title</span></h4></Link>
                             <p>I am a very simple card. I am good at containing small bits of information.
                                 I am convenient because I require little markup to use effectively.</p>
                     </div>
                </div>
             </div>

        </div>
      )
  }

  export default Item