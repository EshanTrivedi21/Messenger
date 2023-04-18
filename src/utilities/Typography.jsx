const Typography = ({variant, content}) => {
    const variants = {
        "auth-title": "text-4xl font-bold text-gray-800",
    }
    return (
        <p className={variants[variant]}>{content}</p>
    )
}

export default Typography