import React from "react";


function Pricing(props){

    console.log(props);
    return(
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.name}</h5>
              <h6 className="card-price text-center">{props.currency}{props.price}<span className="period">/{props.pricePer}</span></h6>
              <hr />
              <ul className="fa-ul">
                <li className = {props.isUser?"":"text-muted"}><span className="fa-li"><i className={props.isUser?"fas fa-check":"fas fa-times"}></i></span>{props.user}</li>
                <li className = {props.isStorage?"":"text-muted"}><span className="fa-li"><i className={props.isStorage?"fas fa-check":"fas fa-times"}></i></span>{props.storage}</li>
                <li className = {props.isPublicProject?"":"text-muted"}><span className="fa-li"><i className={props.isPublicProject?"fas fa-check":"fas fa-times"}></i></span>{props.publicProject}</li>
                <li className = {props.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={props.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{props.communityAccess}</li>
                <li className= {props.isPrivateProject?"":"text-muted"}><span className="fa-li"><i className={props.isPrivateProject?"fas fa-check":"fas fa-times"}></i></span>{props.privateProject}</li>
                <li className={props.isPhone?"":"text-muted"}><span className="fa-li"><i className={props.isPhone?"fas fa-check":"fas fa-times"}></i></span>{props.phone}</li>
                <li className={props.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={props.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{props.subdomain}</li>
                <li className={props.isReports?"":"text-muted"}><span className="fa-li"><i className={props.isReports?"fas fa-check":"fas fa-times"}></i></span>{props.reports}</li>
              </ul>
              <div className="d-grid">
                <a href="https://www.guvi.com/" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Pricing;