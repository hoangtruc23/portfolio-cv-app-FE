import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import './skill.css'
function Skill() {
    return (
        <>
            <h2 className='text-xl font-bold my-3'>Skill</h2>
            <div className="flex gap-3 items-center my-2">
                <CheckCircleOutlineIcon />
                <div className="skill-description">
                    <p>Design Software</p>
                    <div className="bg-green-100 px-4 py-2 rounded-full">
                        <TurnedInNotIcon />5 Years of Exp
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skill
