import BitCoinArtWork from "./BitCoinArtWork"
import CTA from "./CTA"
import Footer from "./Footer"
import Header from "./Header"
import HeroSection from "./HeroSection"
import PopularArtists from "./PopularArtists"
import TrendingSection from "./TrendingSection"
const Home = () => {
    return (
        <main className="flex flex-col w-full overflow-hidden">
            <Header />
            <HeroSection />
            <BitCoinArtWork />
            <TrendingSection />
            <PopularArtists />
            <CTA />
            <Footer />
        </main>
    )
}

export default Home