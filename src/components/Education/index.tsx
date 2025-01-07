import logo from '../../assets/img/logo.avif';
function Education() {
    return (
        <>
            <h2 className='text-xl font-bold my-3'>Education</h2>
            <div className="flex gap-3 items-center my-2">
                <img src={logo} className='w-32' alt="" />
                <div className="">
                    <p className='font-bold'>Arena Multimedia , New York</p>
                    <p>Advanced Diploma In Multimedia</p>
                    <p>2014 - 2017</p>
                </div>
            </div>

        </>
    )
}

export default Education
