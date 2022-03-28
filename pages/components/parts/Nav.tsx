import NavItem from "./NavItem";

const Nav = () => {
    const href = [
        { a: '', id: 1, },
        { a: '#profile', id: 2, desc: 'About' },
        { a: '#skills', id: 3, desc: 'Skills' },
        { a: '#projects', id: 4, desc: 'Project' },
        { a: '#contact', id: 5, desc: 'Contact' }
    ]

    return (
        <ul className='flex justify-center space-x-10 py-20'>
            <NavItem />
        </ul>
    )
}

export default Nav;