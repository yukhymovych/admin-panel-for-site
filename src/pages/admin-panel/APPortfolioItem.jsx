import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const APPortfolioItem = (props) => {
   return (
      <div className="admin__portfolio-item">
         <h3 className="admin__portfolio-item-header">{props.item.title}</h3>
         <Link className="link" 
               to={"/admin/portfolio/" + props.item.id}
               onClick={() => props.callEditingPortfolioItem(props.item.id)}>
            <Button size="small" variant="contained" color="primary">Edit</Button>
         </Link>
         <Button size="small" variant="contained" color="secondary" onClick={() => props.deletePortfolioItem(props.item)}>Delete</Button>
      </div>
   );
}

export default APPortfolioItem;