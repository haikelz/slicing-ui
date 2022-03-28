import SkillsCard from "./parts/SkillsCard";

const Skills = () => {
    return (
        <section className="py-28 px-5 bg-primarygray" id='skills'>
            <div className="container mx-auto px-10 2xl:px-0">

                <h2 className='text-2xl text-center font-mono font-semibold'>Skills</h2>
                <p className='text-lg mt-2 text-center text-gray-600'>Beberapa Skill saya</p>

                <div className="flex -mx-4 mt-10 flex-wrap">
                    <div className="w-4/12 px-4">
                        <SkillsCard name='Javascript' level='Pemula' image='/javascript.svg' imageClassName='h-16 rounded-full' />
                    </div>

                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='ReactJS' level='Pemula' image='/react.svg' imageClassName='h-16' />
                    </div>

                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='TailwindCSS' level='Menengah' image='/tailwindcss-icon.svg' imageClassName='h-16 w-10' />
                    </div>


                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='Git' level='Menengah' image='/git-icon.svg' imageClassName='h-16 rounded-full' />
                    </div>

                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='Linux' level='Lanjutan' image='/archlinux.svg' imageClassName='h-16' />
                    </div>

                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='NodeJS' level='Pemula' image='/nodejs.svg' imageClassName='h-16' />
                    </div>
                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='MySql' level='Pemula' image='/mysql-icon.svg' imageClassName='h-16' />
                    </div>

                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='Dart' level='Pemula' image='/dart.svg' imageClassName='h-16' />
                    </div>

                    <div className="w-4/12 px-4 pb-8">
                        <SkillsCard name='Kotlin' level='Lanjutan' image='/kotlin.svg' imageClassName='h-16' />
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Skills; 