const ProjectItems = ({name, description, image} : {name: any, description: any, image: any}) => {
    return (
        <article className="text-center">
            <img className="w-full rounded-lg" src={image} alt="project 1" />
            <h3 className="text-xl mt-4 mb-1 font-semibold">{name}</h3>
            <p className="text-lg text-gray-400">{description}</p>
        </article>
    )
}

export default ProjectItems; 