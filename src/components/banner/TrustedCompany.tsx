import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const TrustedCompany = () => {
  return (
    <div id="homepage">
      <div id="trusted">
        <div className="container">
          <div className="text-center">
            <h3>
              Trusted by over <span>15,000</span> companies
            </h3>
            <p>
              Customers use Govbuddy to make dealing with California’s
              legislators easy and manageable.
            </p>
            <div className="image-list">
              <StaticImage src="../../images/ico-apple.webp" />
              <StaticImage src="../../images/ico-google.webp" />
              <StaticImage src="../../images/ico-microsoft.webp" />
              <StaticImage src="../../images/ico-chase.webp" />
              <StaticImage src="../../images/ico-exxon.webp" />
              <StaticImage src="../../images/ico-greenpeace.webp" />
              <StaticImage src="../../images/ico-aarp.webp" />
              <StaticImage src="../../images/ico-wsap.webp" />
              <StaticImage src="../../images/ico-chevron.webp" />
              <StaticImage src="../../images/ico-seu.webp" />
              <StaticImage src="../../images/ico-chamber.webp" />
              <StaticImage src="../../images/ico-cpha.webp" />
              <StaticImage src="../../images/ico-custom1.webp" />
              <StaticImage src="../../images/ico-cta.webp" />
              <StaticImage src="../../images/ico-pge.webp" />
              <StaticImage src="../../images/ico-afscme.webp" />
              <StaticImage src="../../images/ico-capitoladv.webp" />
              <StaticImage src="../../images/ico-kp.webp" />
              <StaticImage src="../../images/ico-lang.webp" />
              <StaticImage src="../../images/ico-california.webp" />
              <StaticImage src="../../images/ico-axiom.webp" />
              <StaticImage src="../../images/ico-major.webp" />
              <StaticImage src="../../images/ico-nossaman.webp" />
              <StaticImage src="../../images/ico-gualco.webp" />
            </div>
            <div className="text-center many-more">And many more</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompany
