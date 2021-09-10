import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Apple from "../../assests/ico-apple.webp"
import Google from "../../assests/ico-google.webp"
import Microsoft from "../../assests/ico-microsoft.webp"
import Chase from "../../assests/ico-chase.webp"
import Exxon from "../../assests/ico-exxon.webp"
import GreenPeace from "../../assests/ico-greenpeace.webp"
import Aarp from "../../assests/ico-aarp.webp"
import Wsap from "../../assests/ico-wsap.webp"
import Chevron from "../../assests/ico-chevron.webp"
import Seu from "../../assests/ico-seu.webp"
import Chamber from "../../assests/ico-chamber.webp"
import Cpha from "../../assests/ico-cpha.webp"
import Custom1 from "../../assests/ico-custom1.webp"
import Cta from "../../assests/ico-cta.webp"
import Pge from "../../assests/ico-pge.webp"
import Afscme from "../../assests/ico-afscme.webp"
import CapitolLadv from "../../assests/ico-capitoladv.webp"
import Kp from "../../assests/ico-kp.webp"
import Lang from "../../assests/ico-lang.webp"
import California from "../../assests/ico-california.webp"
import Axiom from "../../assests/ico-axiom.webp"
import Major from "../../assests/ico-major.webp"
import Nossaman from "../../assests/ico-nossaman.webp"
import Gualco from "../../assests/ico-gualco.webp"

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
              <img src={Apple} alt="" />
              <img src={Google} alt="" />
              <img src={Microsoft} alt="" />
              <img src={Chase} alt="" />
              <img src={Exxon} alt="" />
              <img src={GreenPeace} alt="" />
              <img src={Aarp} alt="" />
              <img src={Wsap} alt="" />
              <img src={Chevron} alt="" />
              <img src={Seu} alt="" />
              <img src={Chamber} alt="" />
              <img src={Cpha} alt="" />
              <img src={Custom1} alt="" />
              <img src={Cta} alt="" />
              <img src={Pge} alt="" />
              <img src={Afscme} alt="" />
              <img src={CapitolLadv} alt="" />
              <img src={Kp} alt="" />
              <img src={Lang} alt="" />
              <img src={California} alt="" />
              <img src={Axiom} alt="" />
              <img src={Major} alt="" />
              <img src={Nossaman} alt="" />
              <img src={Gualco} alt="" />
            </div>
            <div className="text-center many-more">And many more</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompany
