import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import SliderBanner from './components/sliderbanner'
import FeatureBox from './components/featurebox'
import Category from './components/category'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <SliderBanner></SliderBanner>
      <FeatureBox></FeatureBox>
      <Category></Category>
    </div>
  )
}



