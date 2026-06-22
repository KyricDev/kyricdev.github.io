import { useEffect, useRef } from "react";

function MainNavBar (){
    const element = useRef<HTMLUListElement>(null);

    useEffect( () => {
        let target = element!.current!.parentElement;
        
        const initOffset = window.innerHeight;
        let root = document;
        root.addEventListener('scroll', () => {
            if (window.scrollY > initOffset) {
                target!.classList.add('bg-color-purple');
            }
            else if (target!.classList.contains('bg-color-purple')) {
                target!.classList.remove('bg-color-purple');
            }
        })
    }, [])

    function click(e: React.MouseEvent<HTMLAnchorElement>){
        e.currentTarget.classList.add('font-white', 'click-white');

        let navs = document.querySelectorAll<HTMLAnchorElement>('a[class^=transition-navbar]');
        
        navs.forEach( nav => {
            if (e.currentTarget.hash == nav.hash) return;
            nav.classList.remove('font-white', 'click-white');
        })
    }
    
    return(
        <ul className="flex font-green font-ntr font-size-24 center-row vh-15" id="main-navbar" ref={element}>
            <li>
                <a className="transition-navbar" href="#projects" onClick={click} >PROJECTS</a>
            </li>
            <li>
                <a className="transition-navbar" href="#techstack" onClick={click} >TECH STACK</a>
            </li>
            <li>
                <a className="transition-navbar" href="#contact" onClick={click} >CONTACT</a>
            </li>
        </ul>
    )
}

export { MainNavBar };