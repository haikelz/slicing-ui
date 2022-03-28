const SkillsCard = ({name, level, image, imageClassName} : {name: any, level: any, image: any, imageClassName: any}) => {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : ''; 

    return (
        <div className="bg-white items-center shadow-skill flex rounded-lg p-6">
            <img className={`mr-6${addImageClassName}`} src={image} alt="" />
            <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
            </div>
        </div>
    )
}

export default SkillsCard; 