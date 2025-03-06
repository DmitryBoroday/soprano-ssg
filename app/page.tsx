import AbroadBanner from './components/AbroadBanner'
import BenefitsGrid from './components/BenefitsGrid'
import BlogBanner from './components/BlogBanner'
import Footer from './components/Footer'
import GroupsVideoBanner from './components/GroupsVideoBanner'
import Hero from './components/Hero'
import LocationsBanner from './components/LocationsBanner'
import PurpleBanner from './components/PurpleBanner'
import Split from './components/Split'
import Testimonials from './components/Testimonials'
import TopBanner from './components/TopBanner'
import VideoNav from './components/VideoNav'
import VipBanner from './components/VipBanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <Split />
      <VideoNav />
      <VipBanner />
      <AbroadBanner />
      <TopBanner />
      <PurpleBanner />
      <LocationsBanner />
      <GroupsVideoBanner />
      <BlogBanner />
      <BenefitsGrid />
      <Testimonials />
      <Footer />
    </main>
  );
}
