import ProjectItems from "./parts/ProjectItems";

const Project = () => {
    return (
        <section className="py-28 mx-8" id='projects'>
            <div className="container mx-auto">
                <h2 className='text-2xl text-center font-mono font-semibold'>Projects</h2>
                <p className='text-lg mt-2 text-center text-gray-600'>Beberapa Project saya</p>

                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="w-6/12 px-4 pb-8">
                        <ProjectItems name='Hasten' description='Exploring UI/UX' image='/hasten.png' />
                    </div>


                    <div className="w-6/12 px-4">
                        <ProjectItems name='Sistem Informasi Kepegawaian' description='Management System for Bangka Belitung Government' image='/resources.png' />
                    </div>

                    <div className="w-6/12 px-4">
                        <ProjectItems name='Hasten 2' description='Exploring UI/UX' image='/resources.png' />
                    </div>

                    <div className="w-6/12 px-4">
                        <ProjectItems name='Hasten 3' description='Exploring UI/UX' image='/hasten.png' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Project; 