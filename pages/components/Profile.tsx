const Profile = () => {
    return (
        <section className='py-28' id='profile'>
            <div className='container mx-auto px-10 2xl:px-0'>
                <h2 className='text-2xl text-center font-mono font-semibold'>Profile</h2>
                <p className='text-lg mt-2 text-center text-gray-600'>Tentang saya</p>
                <div className='flex items-center xl:w-9/12 mx-auto mt-10'>
                    <div className='w-5/12 p-10'>
                        <img className='w-full' src="/profile.png" alt="Saya sendiri" />
                    </div>
                    <div className='w-7/12 text-lg leading-relaxed px-10'>
                        <p className=''> Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis condimentum ornare ante a posuere. Aliquam sem magna, sodales quis congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros. Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus ligula, id viverra mi erat at nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac aliquet eros.</p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile; 