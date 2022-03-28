const Field = ({ label, name, type, className }: { label: any, name: any, type: any, className: any }) => {
    const addClassName = className ? ` ${className}` : ''; 
    const formControlClassName = `bg-transparent border border-primarygray-300 py-3 px-6 w-full${addClassName}`; 
    return (
        <div className="mb-6">
            <label htmlFor={name} className='block mb-1 text-md font-semibold'>{label}</label>
            {type === 'text' && (
                <input type="text" name={name} id={name} className={formControlClassName} />
            )}

            {type === 'textarea' && (
                <input type="text" name={name} id={name} className={formControlClassName} />
            )}

        </div>
    )
}

export default Field; 