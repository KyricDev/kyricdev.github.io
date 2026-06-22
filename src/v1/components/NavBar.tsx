import { useEffect } from "react";

type NavBarProps = {
    divisions: string;
    section: string;
    className: string;
}

export function NavBar (props: NavBarProps){
    useEffect(() => {
        let selectors = document.querySelectorAll("[id^='"+props.section+"-selector-']");
        let lines = document.querySelectorAll("[id^='"+props.section+"-line-']");
        let currentSelector = 1;

        selectors.forEach( selector => {
            selector.addEventListener("click", () => {
                selector.classList.add('bg-white', 'click-diamond');
                selector.children[0]!.classList.add('enlarge-diamond');

                let id = selector.id;
                selectors.forEach( otherSelector => {
                    if ( id == otherSelector.id ) return;
                    otherSelector.classList.remove('bg-white', 'click-diamond');
                    otherSelector.children[0]!.classList.remove('enlarge-diamond');
                })

                let length = selector.id.length;
                let newSelector = parseInt(id[length - 1]!);
                let steps = newSelector - currentSelector;
                
                if (steps >= 0){
                    for (let i = currentSelector - 1; i < newSelector - 1; i++){
                        lines[i]!.classList.add('line-bg-position');
                    }
                }
                else {
                    for (let i = currentSelector - 2; i > newSelector - 2; i--){
                        lines[i]!.classList.remove('line-bg-position');
                    }
                }

                currentSelector = newSelector;
            })
        })

    }, []);

    let navbar = [];
    navbar.push( 
        <a key={props.section + "-selector-1"} 
            href={"#" + props.section + "1"} 
            id={props.section + "-selector-1"} 
            className="diamond bg-green bg-white click-diamond flex center-column center-row" 
            title={props.section + " 1"} 
        >
            <div className="hidden-diamond enlarge-diamond"></div>        
        </a>
    );

    for (let i = 1; i < parseInt(props.divisions!); i++){
        navbar.push( 
            <div key={props.section + "-selector-line-" + (i + 1)} 
                className="line" 
                id={props.section + "-line-" + i}
            >
            </div> 
        );
        navbar.push( 
            <a key={props.section + "-selector-" + (i + 1)} 
                href={"#" + props.section + (i + 1)} 
                id={props.section + "-selector-" + (i + 1)} 
                className="diamond bg-green flex center-column center-row" 
                title={props.section + " " + (i + 1)} 
            >
                <div className="hidden-diamond"></div>
            </a>
        );
    }

    return(
        <div className={props.className}>
            {navbar}
        </div>
    )
}
