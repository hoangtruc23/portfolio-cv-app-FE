
const pages = ['Home', 'All Jobs', 'Companies', 'People', 'Career Advices'];
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.avif';
import './layout.css';

function Header() {
    return (
        <div className='header'>
            <div className="menu">
                <div className="w-24 h-24">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex gap-5 font-semibold">
                    {pages.map((page, index) => {
                        return <a href='#' key={index} className='hover:text-blue-500'>{page}</a>
                    })}
                </div>
            </div>
            <div className="w-14 h-14">
                <img src={logo} alt="" />
            </div>
        </div>

    )
}

export default Header
