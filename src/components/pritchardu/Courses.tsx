import * as React from "react"
import { Link } from "gatsby"
import PritchardLesson from "../../Assests/pritchard-lessons.webp"
import PritchardAuthor from "../../Assests/pritchardu-author.webp"
import PritchardSample from "../../Assests/pritchardu-sample1.webp"

const Courses = () => {
  return (
    <div id="content">
      <div className="container">
        <div className="list-of-courses">
          <div className="row title-top">
            <div className="col-md-6">
              <h3>All Courses</h3>
              <p>
                Our courses offer a good compromise between the continuous
                assessment favoured by some universities and the emphasis placed
                on final exams by others.
              </p>
            </div>
          </div>
          <div className="list">
            <div className="list-item">
              <div className="row align-items-center">
                <div className="col-md-3 img">
                  <img src={PritchardLesson} alt="lessons" />
                </div>
                <div className="col-md-5">
                  <div className="item-content">
                    <div className="title">
                      Lobbying 101: The Transformative Power of Citizen Advocacy
                    </div>
                    <div className="author">
                      by <b>Ray Lebov</b>
                    </div>
                    <div className="ratings">
                      <div className="row">
                        <div className="col-md-3">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                        <div className="col">(435 Rating)</div>
                      </div>
                    </div>
                    <div className="price">$600</div>
                    <div className="badge">BEST SELLER</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="author-detail">
                    <div className="row align-items-center">
                      <div className="col-md-4 img">
                        <img src={PritchardAuthor} alt="author" />
                      </div>
                      <div className="col-md-8">
                        <h6>Ray Lebov</h6>
                        <p>
                          Ray LeBov is a longtime Capitol Lobbyist who also
                          teaches other people how to get into the business with
                          his Capitol Seminars lobbying classes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item">
              <img src={PritchardSample} className="imgStyle" alt="sample" />
              <Link to="#" className="morepr">
                MORE COURSES COMING SOON
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
