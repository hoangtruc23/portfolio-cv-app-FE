import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.avif';

function WorkingExperience() {
    return (
        <div>
            <h2 className='text-xl font-bold my-3'>Working Experience</h2>
            <div className="flex gap-5 my-10">
                <div className="w-20">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <h3 className='font-bold'>Senior UX UI Designer</h3>
                    <div className="flex">
                        <p>Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.</p>
                        <Link to='#' className='w-28 text-blue-500'>See more</Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 my-10">
                <div className="w-20">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <h3 className='font-bold'>Senior UX UI Designer</h3>
                    <div className="flex">
                        <p>Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.</p>
                        <Link to='#' className='w-28 text-blue-500'>See more</Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 my-10">
                <div className="w-20">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <h3 className='font-bold'>Senior UX UI Designer</h3>
                    <div className="flex">
                        <p>Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.</p>
                        <Link to='#' className='w-28 text-blue-500'>See more</Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 my-10">
                <div className="w-20">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <h3 className='font-bold'>Senior UX UI Designer</h3>
                    <div className="flex">
                        <p>Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.</p>
                        <Link to='#' className='w-28 text-blue-500'>See more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingExperience
