
const IntroBox = () => {
    return (
        <div className="container">
            <div className="home-intro__box">
                <div className="home-intro__content">
                    <h1 className="home-intro__title">
                        زیرساخت یکپارچه ابری
                    </h1>
                    <div className="home-intro__subtitle">
                        جهانی امن‌تر، سریع‌تر و دردسترس‌تر
                    </div>
                    <div className="home-intro__text">
                        با استفاده از زیرساخت یکپارچه، امن و همیشه دردسترس ابر آروان بدون دغدغه‌های زیرساختی به وب‌سایت و سرویس‌های خود سرعت ببخشید و امنیت آن را تامین کنید.
                    </div>
                    <div className="home-intro__btn-wrapper">
                        <a href="#" className="btn btn-primary home-intro__btn-start" >
                            شروع کنید
                        </a>
                        <a href="#" className="btn btn-outline-primary home-intro__btn-contact" >
                            تماس با فروش
                        </a>
                    </div>
                </div>
                <div className="home-intro__image">
                    <img src="/images/intro.png" loading="lazy"/>
                </div>
            </div>
            <div className="home-intro__bundle">
                <div className="home-intro__bundle-content">
                    <div className="home-intro__bundle-image-wrapper">
                        <img className="home-intro__bundle-image" src="/images/bundle.png" loading="lazy"/>
                    </div>
                    <div className="home-intro__bundle-text">
                        <div className="home-intro__bundle-title">
                            ۳۰ درصد تخفیف، ویژه حرفه‌ای‌ها
                        </div>
                        <div className="home-intro__bundle-subtitle">
                            در ۳ محصول پرکاربرد ابر آروان
                        </div>
                    </div>
                </div>
                <div className="home-intro__bundle-button-wrapper">
                    <a href="#" className="home-intro__bundle-button">
                        تخفیف بگیرید
                    </a>
                </div>
            </div>
        </div>
    );
}

export default IntroBox;