import { useEffect, useRef } from "react";

function ToTop(){
    const element = useRef<HTMLDivElement>(null);

    useEffect( () => {
        let initOffset = window.innerHeight;
        document.addEventListener('scroll', () => {
            if (window.scrollY > initOffset) {
                element!.current!.classList.add('visible');
            }
            else {
                element!.current!.classList.remove('visible');
            }
        })
    }, [])

    function click(){
        let navs = document.querySelectorAll('a[class^=transition-navbar]');

        navs.forEach( (nav) => {
            nav.classList.remove('font-white', 'click-white');
        })
    }

    return(
        <div className="vh-15 flex font-size-24 font-green center-row to-top" ref={element}>
            <a href="#home" onClick={click} className="back-to-top-icon">Test</a>
        </div>
    )
}

export { ToTop };