import Image from 'next/image'
import Link from 'next/link'
import Header from './components/homecomponent/header'
import SliderBanner from './components/homecomponent/sliderbanner'
import FeatureBox from './components/homecomponent/featurebox'
import Category from './components/homecomponent/category'
import Course from './components/homecomponent/course'
import TrialSection from './components/homecomponent/trialsection'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <SliderBanner></SliderBanner>
      <FeatureBox></FeatureBox>
      <Category></Category>
      <TrialSection></TrialSection>
      <Course></Course>
    </div>
  )
}



