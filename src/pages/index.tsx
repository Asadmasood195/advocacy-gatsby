import * as React from "react"

import Layout from "../components/layout"
import SliderBanner from "../components/banner/SliderBanner"
import CompanyLogos from "../components/banner/CompanyLogos"
import ProductCategories from "../components/banner/ProductCategories"
import ProductCards from "../components/product-cards/ProductCards"
import PrinchardU from "../components/banner/PrinchardU"
import PrintedDirectory from "../components/banner/PrintedDirectory"
import TrustedCompany from "../components/banner/TrustedCompany"
import MoreDetails from "../components/banner/MoreDetails"
import HowCanWeHelp from "../components/banner/HowCanWeHelp"

const IndexPage = () => (
  <Layout>
    <SliderBanner />
    <CompanyLogos />
    <ProductCategories />
    <ProductCards />
    <PrinchardU />
    <PrintedDirectory />
    <MoreDetails />
    <TrustedCompany />
    <HowCanWeHelp />
  </Layout>
)

export default IndexPage
