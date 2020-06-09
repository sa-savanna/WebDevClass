import React from 'react'
import faker from 'faker/locale/nl'

const Comments = props => {
    return (
        <div className="comment">
           <a href="/" className="avatar">
               <img alt="avatar" src={faker.image.avatar()} />
           </a>
           <div className="content">
               <a href="/" className="author">
                   {faker.name.findName()}
               </a>
               <div className="metadata">
                   <span className="date">2020</span>
               </div>
    <div className="text">{faker.lorem.sentences()}</div>
           </div>
       </div>
    )
}

export default Comments;