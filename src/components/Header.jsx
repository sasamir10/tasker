import Logo from "../assets/lws-logo-en.svg";

export default function Header() {
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full z-50 bg-[#191D26]">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                    <img className="h-11.25" src={Logo} alt="Lws" />
                </a>
            </div>
        </nav>
    );
}
