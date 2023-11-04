import Image from 'next/image'
import Link from 'next/link'
import Header from './components/homecomponent/header'
import SliderBanner from './components/homecomponent/sliderbanner'
import FeatureBox from './components/homecomponent/featurebox'
import Category from './components/homecomponent/category'
import Course from './components/homecomponent/course'
import TrialSection from './components/homecomponent/trialsection'
import FunFact from './components/homecomponent/funfact'
import Blog from './components/homecomponent/blog'
import Testimonial from './components/homecomponent/testimonial'
import Callto from './components/homecomponent/callto'
import Footer from './components/homecomponent/footer'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <SliderBanner></SliderBanner>
      <FeatureBox></FeatureBox>
      <Category></Category>
      <TrialSection></TrialSection>
      <Course></Course>
      <FunFact></FunFact>
      <Blog></Blog>
      <Testimonial></Testimonial>
      <Callto></Callto>
    </div>
  )
}



