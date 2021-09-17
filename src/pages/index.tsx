import * as React from "react"

import Layout from "../Components/Layout/Layout"
import SliderBanner from "../Components/Banner/SliderBanner"
import CompanyLogos from "../Components/Banner/CompanyLogos"
import ProductCategories from "../Components/Banner/ProductCategories"
import ProductCards from "../Components/Product-cards/ProductCards"
import PrinchardU from "../Components/Banner/PrinchardU"
import PrintedDirectory from "../Components/Banner/PrintedDirectory"
import TrustedCompany from "../Components/Banner/TrustedCompany"
import MoreDetails from "../Components/Banner/MoreDetails"
import HowCanWeHelp from "../Components/Banner/HowCanWeHelp"

export default function IndexPage() {
  return (
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
}
