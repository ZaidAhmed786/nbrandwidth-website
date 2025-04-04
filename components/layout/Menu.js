import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                    <Link href="/">
                        Home
                        
                    </Link>
                   
                </li>
                <li>
                    <Link href="/">
                       Our Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/service">Cable TV</Link></li>
                        <li><Link href="/service-carousel">Internet</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
               
               
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
