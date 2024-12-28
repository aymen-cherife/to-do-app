import React from 'react';
import {Link} from 'react-router-dom';


export default function Home (){


return (
    <>
      <div className="main-bg text-center bg-primary text-white py-5" id="home">
  <div className="header-text">
    <h1 className="display-4 font-weight-bold mb-3">
      THE TO DO LIST PROJECT
    </h1>
    <h5 className="font-italic">
      just getting started
    </h5>
    <div className="ht-btn mt-4">
      <Link to="/tasks">
        <button type="button" className="btn btn-info btn-lg">Try it out!</button>
      </Link>       
    </div>
  </div>
</div>


    </>
);}