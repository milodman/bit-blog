import React from 'react';


const NewPostTitle = () => {
    return (

        <div className="row">
            <h2 className="center">NEW POST</h2>
            <h4>Title</h4>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" id="textarea1" className="materialize-textarea" placeholder="title"></input>
                        
                    </div>
                </div>
            </form>
        </div>


    )

}

export default NewPostTitle