import Link from "next/link";
 
export default function Navbar(){
    return(
        <div className="bg-orange-800 text-white justify-around flex items-center  mt-8 pt-0 text-center" >
            <Link href="/Logo" style={{fontSize:'30px', marginLeft:'0px'}}>Navbar</Link>
            <Link href="/" >Home</Link>
            <Link href="/About" >About</Link>
            <Link href="/Blog" >Blog</Link>
            <Link href="/Menu">Menu</Link>
            <Link href="/Contact" >Contact</Link>
           
        </div>
    )
}