import { useEffect, useState } from "react";
import DarkMode from "../DarkMode";
import { HeaderLang } from "../home/DropDowns";
import { AngleDownIcon, AngleLeftIcon } from "../icons/IconPack";
import Logo from "../Logo";

const Header = () => {
    const [fixedClass, setfixedClass] = useState("");

    const fixedNavbar = () => {
        let windowHeight = window.scrollY;
        windowHeight >= 56 ? setfixedClass("fixed") : setfixedClass("fade");
    }

    useEffect(() => {
        window.addEventListener("scroll", fixedNavbar);
    }, []);

    return (
        <header className="header">
            <div className="header-bar-subsidiary">
                <div className="container">
                    <div className="header-bar-subsidiary__main">
                        <div className="header-bar-subsidiary__right">
                            <a href="#" className="header-bar-subsidiary__notice-link text-nowrap" id="header-bar-subsidiary_notice">
                                ۳۰درصد تخفیف بسته‌های رشد و حرفه‌ای در ۳ محصول پرکاربرد ابر آروان
                                <AngleLeftIcon />
                            </a>
                        </div>
                        <div className="header-bar-subsidiary__left">
                            <div className="header-bar-subsidiary__items">
                                <DarkMode />
                                <a href="#" className="header-bar-subsidiary__item">
                                    فرصت‌های شغلی
                                </a>
                                <a href="#" className="header-bar-subsidiary__item">
                                    انجمن
                                </a>
                                <a href="#" className="header-bar-subsidiary__item">
                                    بلاگ
                                </a>
                                <a href="#" className="header-bar-subsidiary__item">
                                    تماس با ما
                                </a>
                                <HeaderLang />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-bar header-bar ${fixedClass}`}>
                <div className="container">
                    <div className="header-bar__main">
                        <div className="header-bar__right">
                            <a href="#" className="header-bar__item-logo">
                                <Logo />
                            </a>
                            <div className="header-bar__item">
                                محصولات
                                <AngleDownIcon />
                                <div className="header-bar__item-underline" />
                            </div>
                            <div className="header-bar__item">
                                راهکار‌ها
                                <AngleDownIcon />
                                <div className="header-bar__item-underline" />
                            </div>
                            <a href="#" className="header-bar__item">
                                بازارچه ابری
                            </a>
                            <div className="header-bar__item">
                                پایگاه دانش
                                <AngleDownIcon />
                                <div className="header-bar__item-underline" />
                            </div>
                            <div className="header-bar__item">
                                قیمت
                                <AngleDownIcon />
                                <div className="header-bar__item-underline" />
                            </div>
                        </div>
                        <div className="header-bar__left">
                            <a href="#" className="btn btn-outline-primary header-bar__sign-in">
                                ورود
                            </a>
                            <a href="#" className="btn btn-primary header-bar__sign-up">
                                ثبت نام
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-mobile-bar ${fixedClass}`}>
                <div className="header-mobile-bar__main">
                    <div className="header-mobile-bar__logo">
                        <Logo />
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <DarkMode />
                        <div className="header-mobile-bar__btn">
                            <span className="header-mobile-bar__btn-line" />
                            <span className="header-mobile-bar__btn-line" />
                            <span className="header-mobile-bar__btn-line" />
                        </div>
                    </div>
                </div>
            </div>



        </header>
    );
}

export default Header;