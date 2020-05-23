import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const APBlogItem = (props) => {
   return (
      <div className="admin__blog-item">
         <h3 className="admin_blog-item-header">{props.item.header}</h3>
         <p className="admin__blog-item-date">{props.item.date}</p>
         <Link className="link" 
               to={"/admin/blog/" + props.item.id}
               onClick={() => props.callEditingArticle(props.item.id)}>
            <Button size="small" variant="contained" color="primary">Edit</Button>
         </Link>
         <Button size="small" variant="contained" color="secondary" onClick={() => props.deleteArticle(props.item)}>Delete</Button>
      </div>
   );
}

export default APBlogItem;
