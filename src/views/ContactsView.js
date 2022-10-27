import React from 'react'
import FormSection from '../sections/FormSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import MapSection from '../sections/MapSection'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'

const ContactsView = () => {
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <MapSection />
      <FormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView