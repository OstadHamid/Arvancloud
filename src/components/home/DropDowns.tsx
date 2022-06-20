import { useEffect, useRef, useState } from "react";



const HeaderLang = () => {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const btnRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && btnRef.current && !btnRef.current.contains(event.target)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div className="header-bar-subsidiary__lang">
            <div className="header-bar-subsidiary__lang-item header-bar-subsidiary__lang-item--btn" ref={btnRef} onClick={handleClick}>
                <div className="header-bar-subsidiary__lang-title">
                    فارسی
                </div>
                <div className="header-bar-subsidiary__lang-flag">
                    <img src="/images/icons/fa.svg" alt="fa" />
                </div>
            </div>
            <div className={show ? "header-bar-subsidiary__lang-dropdown show" : "header-bar-subsidiary__lang-dropdown"} ref={dropdownRef}>
                <a href="#" className="header-bar-subsidiary__lang-item">
                    <div className="header-bar-subsidiary__lang-title">
                        English
                    </div>
                    <div className="header-bar-subsidiary__lang-flag">
                        <img src="/images/icons/en.svg" alt="en" />
                    </div>
                </a>
                <a href="#" className="header-bar-subsidiary__lang-item">
                    <div className="header-bar-subsidiary__lang-title">
                        العربية
                    </div>
                    <div className="header-bar-subsidiary__lang-flag">
                        <img src="/images/icons/ar.svg" alt="ar" />
                    </div>
                </a>
                <a href="#" className="header-bar-subsidiary__lang-item">
                    <div className="header-bar-subsidiary__lang-title">
                        Deutsch
                    </div>
                    <div className="header-bar-subsidiary__lang-flag">
                        <img src="/images/icons/de.svg" alt="de" />
                    </div>
                </a>
                <a href="#" className="header-bar-subsidiary__lang-item">
                    <div className="header-bar-subsidiary__lang-title">
                        Türkçe
                    </div>
                    <div className="header-bar-subsidiary__lang-flag">
                        <img src="/images/icons/tr.svg" alt="tr" />
                    </div>
                </a>
                <a href="#" className="header-bar-subsidiary__lang-item">
                    <div className="header-bar-subsidiary__lang-title">
                        Français
                    </div>
                    <div className="header-bar-subsidiary__lang-flag">
                        <img src="/images/icons/fr.svg" alt="fr" />
                    </div>
                </a>
                <a href="#" className="header-bar-subsidiary__lang-item">
                    <div className="header-bar-subsidiary__lang-title">
                        Portuguese
                    </div>
                    <div className="header-bar-subsidiary__lang-flag">
                        <img src="/images/icons/pt.svg" alt="pt" />
                    </div>
                </a>
                <a href="#" className="header-bar-subsidiary__lang-item">
                    <div className="header-bar-subsidiary__lang-title">
                        中文
                    </div>
                    <div className="header-bar-subsidiary__lang-flag">
                        <img src="/images/icons/cn.svg" alt="cn" />
                    </div>
                </a>
            </div>
        </div>
    )
}
const FooterLang = () => {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const btnRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && btnRef.current && !btnRef.current.contains(event.target)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div className="home-footer__lang">
            <div className="home-footer__lang-btn" ref={btnRef} onClick={handleClick}>
                <div className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        فارسی
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/fa.svg" alt="fa" />
                    </div>
                </div>
            </div>
            <div className={show ? "home-footer__lang-dropdown show" : "home-footer__lang-dropdown"} ref={dropdownRef}>
                <a href="#" className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        English
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/en.svg" alt="en" />
                    </div>
                </a>
                <a href="#" className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        العربية
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/ar.svg" alt="ar" />
                    </div>
                </a >
                <a href="#" className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        Deutsch
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/de.svg" alt="de" />
                    </div>
                </a>
                <a href="#" className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        Türkçe
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/tr.svg" alt="tr" />
                    </div>
                </a>
                <a href="#" className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        Français
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/fr.svg" alt="fr" />
                    </div>
                </a>
                <a href="#" className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        Portuguese
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/pt.svg" alt="pt" />
                    </div>
                </a>
                <a href="#" className="home-footer__lang-item">
                    <div className="home-footer__lang-title">
                        中文
                    </div>
                    <div className="home-footer__lang-flag">
                        <img src="/images/icons/cn.svg" alt="cn" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export { HeaderLang, FooterLang }