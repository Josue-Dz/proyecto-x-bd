import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export function TarjetaSeguimientoX({ name, userName, initialIsFollowing }){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const { isDarkMode } = useTheme();


    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassNameDark = isFollowing ? 'x-followCard-followButton is-following-darkmode' : 'x-followCard-followButton-darkmode'
    const buttonClassNameLight = isFollowing ? 'x-followCard-followButton is-following-lightmode' : 'x-followCard-followButton-lightmode'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='x-followCard w-full flex items-center justify-between'>
            <header className='x-followCard-header'>
                
                <img className='x-followCard-avatar' 
                     alt="El avatar de un usuario" 
                     src={`https://unavatar.io/x/${userName}`} />
                     
                <div className='x-followCard-info'>
                    <strong className={isDarkMode ? "dark:bg-gray-950 dark:text-white" : "text-black"}>{name}</strong>
                    <span className={`x-followCard-infoUserName 
                        ${isDarkMode ? "dark:text-white" : "text-gray-600"}`}>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={isDarkMode ? buttonClassNameDark : buttonClassNameLight} onClick={handleClick}>
                    <span className={`x-followCard-text ${isFollowing ? "": "text-black"} 
                        ${isDarkMode ? "dark:text-white" : "text-white"}`}>{text}</span>
                    <span className='x-followCard-unFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}