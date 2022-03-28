const Button = ({ className, children, pill }: { className: any, children: any, pill: any }) => {
    const addClassName = className ? ` ${className}` : '';

    return (
        <a href="" className={`border border-yellow-500 py-2 font-semibold text-lg px-8 rounded-full inline-block ${pill ? ' rounded-full' : ''} ${addClassName}`}>{children}</a>
    )
}

export default Button; 