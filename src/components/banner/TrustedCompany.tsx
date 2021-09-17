import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Apple from "../../Assests/ico-apple.webp"
import Google from "../../Assests/ico-google.webp"
import Microsoft from "../../Assests/ico-microsoft.webp"
import Chase from "../../Assests/ico-chase.webp"
import Exxon from "../../Assests/ico-exxon.webp"
import GreenPeace from "../../Assests/ico-greenpeace.webp"
import Aarp from "../../Assests/ico-aarp.webp"
import Wsap from "../../Assests/ico-wsap.webp"
import Chevron from "../../Assests/ico-chevron.webp"
import Seu from "../../Assests/ico-seu.webp"
import Chamber from "../../Assests/ico-chamber.webp"
import Cpha from "../../Assests/ico-cpha.webp"
import Custom1 from "../../Assests/ico-custom1.webp"
import Cta from "../../Assests/ico-cta.webp"
import Pge from "../../Assests/ico-pge.webp"
import Afscme from "../../Assests/ico-afscme.webp"
import CapitolLadv from "../../Assests/ico-capitoladv.webp"
import Kp from "../../Assests/ico-kp.webp"
import Lang from "../../Assests/ico-lang.webp"
import California from "../../Assests/ico-california.webp"
import Axiom from "../../Assests/ico-axiom.webp"
import Major from "../../Assests/ico-major.webp"
import Nossaman from "../../Assests/ico-nossaman.webp"
import Gualco from "../../Assests/ico-gualco.webp"

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
