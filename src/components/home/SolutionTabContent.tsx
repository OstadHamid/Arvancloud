import { useState } from "react";
import { BitCoinIcon, BookOpenAltIcon, ForkIcon, MoneySackIcon, RecoveryIcon, RocketIcon, ShoppingCartIcon } from "../icons/IconPack";

const SolutionTabContent = () => {
    const [tab, setTab] = useState("tab1")

    return (
        <>
            <div className="home-solutions__tab-wrapper">
                <div className={tab == "tab1" ? "home-solutions__tab active" : "home-solutions__tab"} onClick={() => setTab("tab1")}>
                    بر اساس صنعت
                </div>
                <div className={tab == "tab2" ? "home-solutions__tab active" : "home-solutions__tab"} onClick={() => setTab("tab2")}>
                    بر اساس اندازه شرکت
                </div>
                <div className={tab == "tab3" ? "home-solutions__tab active" : "home-solutions__tab"} onClick={() => setTab("tab3")}>
                    بر اساس کاربرد
                </div>
            </div>
            <div className="container">
                <div className="home-solutions__panel-wrapper">
                    <div className={tab == "tab1" ? "home-solutions__panel active" : "home-solutions__panel"}>
                        <a href="#" className="home-solutions__item">
                            <div className="home-solutions__item-image">
                                <MoneySackIcon />
                            </div>
                            <div className="home-solutions__item-title">
                                خدمات مالی
                            </div>
                            <div className="home-solutions__item-text">
                                راهکاری سریع و مطمین برای نرم‌افزارهای خدمات مالی
                            </div>
                        </a>
                        <a href="#" className="home-solutions__item">
                            <div className="home-solutions__item-image">
                                <BitCoinIcon />
                            </div>
                            <div className="home-solutions__item-title">
                                ارز دیجیتال
                            </div>
                            <div className="home-solutions__item-text">
                                راهکاری امن و کارآمد برای تریدرها و صرافی‌های ارزهای دیجیتال
                            </div>
                        </a>
                        <a href="#" className="home-solutions__item">
                            <div className="home-solutions__item-image">
                                <ShoppingCartIcon />
                            </div>
                            <div className="home-solutions__item-title">
                                فروشگاه آنلاین
                            </div>
                            <div className="home-solutions__item-text">
                                راهکاری یکپارچه و مقیاس‌پذیر برای زیرساخت فروشگاه‌های اینترنتی
                            </div>
                        </a>
                        <a href="#" className="home-solutions__item">
                            <div className="home-solutions__item-image">
                                <BookOpenAltIcon />
                            </div>
                            <div className="home-solutions__item-title">
                                آموزش آنلاین
                            </div>
                            <div className="home-solutions__item-text">
                                راهکاری امن و دردسترس برای نسل نوین خدمات آموزشی
                            </div>
                        </a>
                    </div>
                    <div className={tab == "tab2" ? "home-solutions__panel active" : "home-solutions__panel"}>
                        <a href="#" className="home-solutions__item">
                            <div className="home-solutions__item-image">
                                <RocketIcon />
                            </div>
                            <div className="home-solutions__item-title">
                                استارت‌آپ‌ها
                            </div>
                            <div className="home-solutions__item-text">
                                راهکاری یکپارچه‌ برای رفع نیازهای زیرساختی استارت‌آپ‌ها
                            </div>
                        </a>
                        <a href="#" className="home-solutions__item">
                            <div className="home-solutions__item-image">
                                <ForkIcon />
                            </div>
                            <div className="home-solutions__item-title">
                                سازمان‌های بزرگ
                            </div>
                            <div className="home-solutions__item-text">
                                راهکاری برای بهره‌مندی از نسل جدید فناوری ابری در کسب‌وکارهای بزرگ
                            </div>
                        </a>
                    </div>
                    <div className={tab == "tab3" ? "home-solutions__panel active" : "home-solutions__panel"}>
                        <a href="#" className="home-solutions__item">
                            <div className="home-solutions__item-image">
                                <RecoveryIcon />
                            </div>
                            <div className="home-solutions__item-title">
                                بازیابی پس از دیزستر
                            </div>
                            <div className="home-solutions__item-text">
                                راهکاری امن، سریع و قابل اتکا برای بازیابی اطلاعات پس از بحران
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SolutionTabContent;