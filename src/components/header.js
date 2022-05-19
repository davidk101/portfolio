import React, {useState} from "react";
import HamburgerMenu from "react-hamburger-menu";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import Navigation from "../components/navigation";

const Header = ({ pageNo, setPageNo }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-between w-11/12 mx-auto py-8">
                <div className="flex items-center ">
                    <h1 className="text-lg hidden sm:flex sm:text-3xl tracking-wider font-mono">
                        DAVID DIVYAN KUMAR
                    </h1>
                    <h1 className="text-lg sm:hidden sm:text-3xl tracking-wider">
                        DAVID K.
                    </h1>
                </div>
                <div className="flex space-x-8 sm:space-x-14 justify-end items-center">
                    <div className="flex space-x-4 sm:space-x-8 items-center">
                        <a href="mailto:david.dn.kumar@gmail.com">
                            <img src={email} alt="Email" className="w-8 sm:w-12" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/davidkumar101/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="LinkedIn" className="w-8 sm:w-12" />
                        </a>
                        <a
                            href="https://github.com/davidk101"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="GitHub" className="w-8 sm:w-12" />
                        </a>
                    </div>
                    <HamburgerMenu
                        width={30}
                        height={22}
                        animationDuration={0.3}
                        isOpen={showMenu}
                        className="md:hidden"
                        menuClicked={() => setShowMenu(!showMenu)}
                    />
                </div>
            </div>
            <Navigation
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                pageNo={pageNo}
                setPageNo={setPageNo}
            />
        </div>
    );
};

export default Header;
