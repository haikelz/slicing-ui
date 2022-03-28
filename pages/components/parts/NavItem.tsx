const NavItem = () => {
    const href = [
        { a: '#profile', id: 2, desc: 'About' },
        { a: '#skills', id: 3, desc: 'Skills' },
        { a: '#projects', id: 4, desc: 'Projects' },
        { a: '#contact', id: 5, desc: 'Contact' }
    ]
    return (
        <>
            {href.map(aHref => (
                <li key={aHref.id}>
                    <a className="text-white text-opacity-60 hover:text-opacity-100 font-semibold"
                        href={aHref.a}
                    >
                        {aHref.desc}
                    </a>
                </li>
            ))}
        </>
    )
}

export default NavItem;