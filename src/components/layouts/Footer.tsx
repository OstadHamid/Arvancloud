import { FooterLang } from "../home/DropDowns";
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from "../icons/IconPack";
import { DaneshbonyanLogo, EftaLogo, InformaticsLogo, PadafandLogo, PasargadBankLogo, RahbariLogo, SamandehiLogo, SenfRayanehei } from "../icons/LogoPack";
import Logo from "../Logo";

const Footer = () => {
    return (
        <footer className="home-footer">
            <div className="home-footer__menu">
                <div className="container">
                    <div className="home-footer__col-wrapper">
                        <div className="home-footer__col">
                            <div className="home-footer__col-title">
                                محصولات
                            </div>
                            <ul className="home-footer__ul">
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        شبکه توزیع محتوا
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        DNS ابری
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        امنیت ابری
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        سرور ابری
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        سرور مجازی
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        فضای ابری
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        سکوی ابری
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        پلتفرم ویدیو
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        پلتفرم پخش زنده
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        تبلیغات ویدیویی
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        بازارچه ابری
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="home-footer__col">
                            <div className="home-footer__col-title">
                                کاربران
                            </div>
                            <ul className="home-footer__ul">
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        شرایط استفاده از خدمات
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        سطح کیفیت خدمات
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        نشانی‌های IP
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        دسترسی به API
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link " rel="&quot;nofollow&quot;">
                                        وضعیت سرویس
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link " rel="&quot;nofollow&quot;">
                                        گزارش تغییرات
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        نقشه شبکه
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        سیاست حفظ حریم خصوصی
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="home-footer__col">
                            <div className="home-footer__col-title">
                                آروان
                            </div>
                            <ul className="home-footer__ul">
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        درباره آروان
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        قصه‌ی آروان
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        چشم‌انداز
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        مسوولیت اجتماعی
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        همکاران تجاری
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        گزارش شفافیت
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="home-footer__col">
                            <div className="home-footer__col-title">
                                فرهنگ
                            </div>
                            <ul className="home-footer__ul">
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link n-home-footer__li-link--with-tag">
                                        فرصت‌های شغلی
                                        <span className="home-footer__li-tag">
                                            در حال جذب
                                        </span>
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        ساختار آروانی
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        مسیر رشد در آروان
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        حقوق شفاف
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="home-footer__col">
                            <div className="home-footer__col-title">
                                ارتباطات
                            </div>
                            <ul className="home-footer__ul">
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        تماس با ما
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link " rel="&quot;nofollow&quot;">
                                        وبلاگ
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        در رسانه‌ها
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        سوار ابرها
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        آروانی نوشتن
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="home-footer__col">
                            <div className="home-footer__col-title">
                                سایر
                            </div>
                            <ul className="home-footer__ul">
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        ﭘﺮﺳﺶ‌ﻫﺎی راﯾﺞ
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link " rel="&quot;nofollow&quot;">
                                        راهنمای محصولات
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link " rel="&quot;nofollow&quot;">
                                        مستندات فنی
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        وبینارها
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        مسابقه کشف باگ
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link ">
                                        پروژه‌های متن باز
                                    </a>
                                </li>
                                <li className="home-footer__li">
                                    <a href="#" className="home-footer__li-link " rel="&quot;nofollow&quot;">
                                        رادار ابر آروان
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-footer__content-info">
                <div className="container">
                    <div className="home-footer__bar">
                        <div className="home-footer__nav">
                            <div className="home-footer__nav-link-wrapper">
                                <a href="#" className="home-footer__nav-link">
                                    انجمن
                                </a>
                                <a href="#" className="home-footer__nav-link">
                                    بلاگ
                                </a>
                                <a href="#" className="home-footer__nav-link">
                                    تماس با ما
                                </a>
                            </div>
                            <FooterLang />
                        </div>
                        <div className="home-footer__social">
                            <a href="https://github.com/OstadHamid/arvancloud" target="_blank" className="home-footer__social-item">
                                <GithubIcon />
                            </a>
                            <a href="#" target="_blank" className="home-footer__social-item">
                                <LinkedinIcon />
                            </a>
                            <a href="#" target="_blank" className="home-footer__social-item">
                                <InstagramIcon />
                            </a>
                            <a href="#" target="_blank" className="home-footer__social-item">
                                <TelegramIcon />
                            </a>
                            <a href="#" target="_blank" className="home-footer__social-item">
                                <TwitterIcon />
                            </a>
                        </div>
                    </div>
                    <div className="home-footer__bottom">
                        <div className="home-footer__info">
                            <div className="home-footer__logo">
                                <Logo />
                            </div>
                            <div className="home-footer__copyright">
                                طراحی و تولید ابر آروان - ایران ۱۴۰۱
                            </div>
                        </div>
                        <div className="home-footer__certs">
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">بانک پاسارگاد</span>
                                <PasargadBankLogo />
                            </div>
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">شرکت خدمات انفورماتیک</span>
                                <InformaticsLogo />
                            </div>
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">ساماندهی</span>
                                <SamandehiLogo />
                            </div>
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">دانش بنیان</span>
                                <DaneshbonyanLogo />
                            </div>
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">سازمان پدافند غیرعامل</span>
                                <PadafandLogo />
                            </div>
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">مرکز راهبری سامانه مدیریت تامین‌کنندگان</span>
                                <RahbariLogo />
                            </div>
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">سازمان نظام صنفی رایانه‌ای</span>
                                <SenfRayanehei />
                            </div>
                            <div className="home-footer__cert-item">
                                <span className="home-footer__cert-tooltip">افتا</span>
                                <EftaLogo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;