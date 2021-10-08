import Banner from '../components/Banner';
import PricingCards from '../components/PricingCard';
import ProductFeatures from '../components/Features';
import '../App.scss';

export default function Home() {
    const bannerData = {
        title: 'Track your pets easily',
        subheader: 'Pet-parenting has never been easier'
    }

    return(
        <>
            <Banner BannerProp={bannerData}/>
            <ProductFeatures/>
            <PricingCards/>

        </>
    )
} 

