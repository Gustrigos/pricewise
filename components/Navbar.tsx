import Link from "next/link";
import Image from "next/image";

const navIcons = [
    { src: "/assets/icons/search.svg", alt: "Search" },
    { src: "/assets/icons/black-heart.svg", alt: "heart" },
    { src: "/assets/icons/user.svg", alt: "User" },
]

const Navbar = () => {
    return (
        <header className="w-full">
            <nav className="nav">
                <Link href="/" className=" flex items-center gap-1">
                    <Image 
                    src="/assets/icons/logo.svg" 
                    width={27}
                    height={27}
                    alt="Logo"
                    />
                    <p>
                        Price<span className="text-primary">wise</span>
                    </p>
                </Link>

                <div className="flex items-center gap-5">
                    {navIcons.map((icon) => (
                        <Image 
                        key={icon.alt}
                        src={icon.src}
                        width={28}
                        height={28}
                        alt={icon.alt}
                        className="object-contain"
                        />
                    
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;