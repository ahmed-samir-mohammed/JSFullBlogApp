import MainLayput from "../../layout/MainLayout";
import ArticalsList from "./container/ArticalsList";
import Hero from "./container/Hero";
const HomePage = () => {
    return <MainLayput>
        <Hero />
        <ArticalsList />
    </MainLayput>
}

export default HomePage
