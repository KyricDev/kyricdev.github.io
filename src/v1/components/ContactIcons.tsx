import emailLogo from '../assets/svg/email.svg'; 
import githubLogo from '../assets/svg/github.svg'; 
import linkedInLogo from '../assets/svg/linkedin.svg'; 


function ContactIcons (){
    async function click(e: React.MouseEvent<HTMLDivElement>){
        await navigator.clipboard.writeText('madridrickydave@gmail.com');
        e.currentTarget.classList.add('icon-email-clicked');
    }
    function mouseLeave(e: React.MouseEvent<HTMLDivElement>){
        e.currentTarget.classList.remove('icon-email-clicked');
    }
    return(
        <div className="flex column-row center-column center-row max-width-27r"> 
            <div onClick={click} 
                onMouseLeave={mouseLeave} 
                className="flex column center-row icon icon-email icon-content contact-relative" 
                id="email-icon"
            >
                <img src={emailLogo} alt="Email Logo" />   
            </div>
            <a href="https://github.com/KyricDev" 
                target="_blank" 
                className="flex column center-row icon icon-github icon-content contact-relative"
            >
                <img src={githubLogo} alt="GitHub Logo" />  
            </a>
            <a href="https://www.linkedin.com/in/ricky-dave-madrid-aa4ba6149/" 
                target="_blank" 
                className="flex column center-row icon icon-linkedin icon-content contact-relative"
            >
                <img src={linkedInLogo} alt="LinkedIn Logo" />
            </a>
        </div>
    )
}

export { ContactIcons };