import * as React from 'react'
interface props{
    bg:string,
    title:string,
    description:string
}
const Banner = (props:props) => {
    return (
        <div id="banner" className={`banner-subproducts ${props.bg}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-8">
                <div className="text-left text-banner">
                  <h1>{props.title}</h1>
                  <h5>
                    {props.description}
                  </h5>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
    )
}

export default Banner
