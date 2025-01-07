import Education from "../components/Education"
import PortfolioCard from "../components/PortfolioCard"
import Skill from "../components/Skill"
import WorkingExperience from "../components/WorkingExperience"
import '../index.css'
function HomePage() {
    return (
        <div className='home-page flex gap-10'>
            <PortfolioCard />
            <div className="content">
                <WorkingExperience />
                <Skill />
                <Education />
            </div>
        </div>
    )
}

export default HomePage
