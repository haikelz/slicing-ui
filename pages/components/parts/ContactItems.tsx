const ContactItems = ({label, value, icon, className} : {label: any, value: any, icon: any, className: any}) => {
    const addClassName = className ? ` ${className}` : '';
    return (
        <div className={`flex items-start${addClassName}`}>
            <img src={icon} className='w-8' />

            <div className="ml-4">
                <div className="text-sm font-bold mb-1">{label}</div>
                <div className="text-lg font-semibold">{value}</div>
            </div>
        </div>
    )
}

export default ContactItems; 