import { useNavigate } from "react-router-dom";

const Typography = ({variant, content, link}) => {
    const variants = {
        "auth-title": "text-3xl font-bold text-[#151515]",
        "auth-subtitle": "text-sm font-medium text-[#151515]",
        "auth-link": "text-sm font-medium text-[#151515] underline cursor-pointer",
        "button": "text-[1.1rem] font-medium text-[#efefef] capitalize"
    }
    const navigate = useNavigate(); 
    const handleClick = () => {
        link && navigate(link);
    }

    return (
        <p className={variants[variant]} onClick={handleClick}>{content}</p>
    )
}

export default Typography
