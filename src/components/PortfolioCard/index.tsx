import avatar from '../../assets/img/avatar.avif';
import './portfolio-card.css'
function PortfolioCard() {
    return (
        <>
            <div className="portfolio-card">
                <div className="image-user ">
                    <div className="cover-img bg-blue-500"></div>
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                </div>
                <div className="information mx-3">
                    <div className="text-center">
                        <h3 className='text-xl font-bold'>Ahihi</h3>
                        <p className='text-lg'>Developer</p>
                        <div className="my-5">
                            <p>Incididunt dolore ut aliquip culpa  mollit dolore sint esse non c</p>
                        </div>
                    </div>

                    <div className="my-3">
                        <h4 className='font-bold'>Profile link</h4>
                        <div className="bg-gray-200">
                            <p className='p-2'>
                                <a href="#" className=" px-3 py-1 rounded-md">Visit my website</a>
                            </p>
                        </div>
                    </div>
                    <button className='btn bg-blue-500 w-full p-3 text-white rounded-md'>Edit Profile</button>
                </div>
            </div>
        </>
    )
}
export default PortfolioCard
