import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
function Skill() {
    return (
        <>
            <h2 className='text-xl font-bold my-3'>Skill</h2>
            <div className="flex gap-3 items-center my-2">
                <CheckCircleOutlineIcon />
                <p>Design Software</p>
                <div className="bg-green-100 px-4 py-2 rounded-full">
                    <TurnedInNotIcon />5 Years of Exp
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <CheckCircleOutlineIcon />
                <p>Design Software</p>
                <div className="bg-green-100 px-4 py-2 rounded-full">
                    <TurnedInNotIcon />5 Years of Exp
                </div>
            </div>
            <div className="flex gap-3 items-center my-2">
                <CheckCircleOutlineIcon />
                <p>Design Software</p>
                <div className="bg-green-100 px-4 py-2 rounded-full">
                    <TurnedInNotIcon />5 Years of Exp
                </div>
            </div>
        </>
    )
}

export default Skill
