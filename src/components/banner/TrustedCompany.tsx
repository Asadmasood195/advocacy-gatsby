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
              <StaticImage src="../../assests/ico-apple.webp" />
              <StaticImage src="../../assests/ico-google.webp" />
              <StaticImage src="../../assests/ico-microsoft.webp" />
              <StaticImage src="../../assests/ico-chase.webp" />
              <StaticImage src="../../assests/ico-exxon.webp" />
              <StaticImage src="../../assests/ico-greenpeace.webp" />
              <StaticImage src="../../assests/ico-aarp.webp" />
              <StaticImage src="../../assests/ico-wsap.webp" />
              <StaticImage src="../../assests/ico-chevron.webp" />
              <StaticImage src="../../assests/ico-seu.webp" />
              <StaticImage src="../../assests/ico-chamber.webp" />
              <StaticImage src="../../assests/ico-cpha.webp" />
              <StaticImage src="../../assests/ico-custom1.webp" />
              <StaticImage src="../../assests/ico-cta.webp" />
              <StaticImage src="../../assests/ico-pge.webp" />
              <StaticImage src="../../assests/ico-afscme.webp" />
              <StaticImage src="../../assests/ico-capitoladv.webp" />
              <StaticImage src="../../assests/ico-kp.webp" />
              <StaticImage src="../../assests/ico-lang.webp" />
              <StaticImage src="../../assests/ico-california.webp" />
              <StaticImage src="../../assests/ico-axiom.webp" />
              <StaticImage src="../../assests/ico-major.webp" />
              <StaticImage src="../../assests/ico-nossaman.webp" />
              <StaticImage src="../../assests/ico-gualco.webp" />
            </div>
            <div className="text-center many-more">And many more</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompany
