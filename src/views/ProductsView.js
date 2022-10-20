import React from 'react'
import UnderConstructionComponent from '../components/UnderConstructionComponent'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'

const ProductsView = () => {
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <UnderConstructionComponent />
      <FooterSection />
    </>
  )
}

export default ProductsView