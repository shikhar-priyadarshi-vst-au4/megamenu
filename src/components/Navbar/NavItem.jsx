import { useState } from "react";

const NavItemContent= ({childrens = []}) => {
    return <> 
    {/* <div className="container">
    <div className="row"> */}
        {childrens.map((child, index) => 
            <div className="col-12 col-lg-4 p-4 text-center productItem" key={index}>
                <img src={child.icon} width={260} height={100}/>
                <h4>{child.title}</h4>
                <p>{child.subtitle}</p>
            </div>)}
    {/* </div>
    </div> */}
    </>
}

export default function NavItem({navItem = {}}){
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    if(navItem.hasChildren)
    return <>
        <li className="nav-item dropdown p-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a className={`relative nav-link dropdown-toggle showMenuArrow ${hover ? "show" : ""}`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded={hover ? "true" : "false"}>
            <div className="d-flex flex-row flex-lg-column align-items-center">
                <img src={navItem.icon} width={40} height={40}/>
                <span className="mt-0 mx-3 mt-lg-3 mx-lg-0">{navItem.title}</span>
            </div>
        </a>
        <div className={`container dropdown-menu ${hover? "show" : ""}`} aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item row">
                <NavItemContent childrens={navItem.children}/>
            </a>
        </div>
        </li>
    </>
    return <>
        <li className="nav-item p-2">
          <a className="nav-link" href="#">
            <div className="d-flex flex-row flex-lg-column align-items-center">
                <img src={navItem.icon} width={40} height={40}/>
                <span className="mt-0 mx-3 mt-lg-3 mx-lg-0">{navItem.title}</span>
            </div>
          </a>
        </li>
    </>

}