import React from 'react'

const NewPostContent = () => {

    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <h4>Content</h4>
                    <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea" placeholder="content"></textarea>
                       
                    </div>
                </div>
            </form>
            <a className="btn-large right #0288d1 light-blue darken-2">Cancel</a>
            <a className="btn-large right #0288d1 light-blue darken-2">Save</a>
        </div>
    )
}

export default NewPostContent