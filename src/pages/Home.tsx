import Education from "../components/Education"
import PortfolioCard from "../components/PortfolioCard"
import Skill from "../components/Skill"
import WorkingExperience from "../components/WorkingExperience"

function HomePage() {
    return (
        <div className='flex gap-10 m-10'>
            <PortfolioCard />
            <div className="">
                <WorkingExperience />
                <Skill />
                <Education/>
            </div>
        </div>
    )
}

export default HomePage
