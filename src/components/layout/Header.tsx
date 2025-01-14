
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.avif';
import './layout.css';
import PersonIcon from '@mui/icons-material/Person';
const pages = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'All Jobs',
        path: 'all-jobs'
    },
    {
        name: 'Companies',
        path: 'companies'
    },
];

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
                        return <Link to={page.path} key={index} className='hover:text-blue-500'>{page.name}</Link>
                    })}
                </div>
            </div>
            <div className="flex gap-10">
                {/* <PersonIcon /> */}
                <Link to='log-in'>Login</Link>
                <Link to='sign-up'>Signup</Link>
            </div>
        </div>

    )
}

export default Header
