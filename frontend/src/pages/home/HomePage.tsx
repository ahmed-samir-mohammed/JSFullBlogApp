import MainLayput from "../../layout/MainLayout";
import ArticalsList from "./container/ArticalsList";
import CTA from "./container/CTA";
import Hero from "./container/Hero";
const HomePage = () => {
    return <MainLayput>
        <Hero />
        <ArticalsList />
        <CTA />
    </MainLayput>
}

export default HomePage
