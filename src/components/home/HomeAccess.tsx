import { ApiIcon, DocumentAltIcon, OpenBookIcon, PenToSquareIcon, QuestionIcon, UsersIcon } from "../icons/IconPack";

const HomeAccess = () => {
    return (
        <div className="container">
            <div className="home-access__title">
                دسترسی‌های مفید
            </div>
            <div className="home-access__subtitle">
                هر آن‌چه می‌خواهید درباره ابر آروان بدانید
            </div>
            <div className="home-access__item-wrapper">
                <a href="#" className="home-access__item">
                    <div className="home-access__item-image">
                        <PenToSquareIcon />
                    </div>
                    <div className="home-access__item-title">
                        مقالات و یادداشت‌ها
                    </div>
                    <div className="home-access__item-text">
                        جایی برای اخبار، یادداشت‌ها و گزارش‌های فنی
                    </div>
                </a>
                <a href="#" className="home-access__item">
                    <div className="home-access__item-image">
                        <OpenBookIcon />
                    </div>
                    <div className="home-access__item-title">
                        راهنمای استفاده
                    </div>
                    <div className="home-access__item-text">
                        راهنمای کار با محصولات ابر آروان
                    </div>
                </a>
                <a href="#" className="home-access__item">
                    <div className="home-access__item-image">
                        <ApiIcon />
                    </div>
                    <div className="home-access__item-title">
                        مستندات API
                    </div>
                    <div className="home-access__item-text">
                        مستندات کار با API محصولات ابر آروان
                    </div>
                </a>
                <a href="#" className="home-access__item">
                    <div className="home-access__item-image">
                        <DocumentAltIcon />
                    </div>
                    <div className="home-access__item-title">
                        مستندات محصولی
                    </div>
                    <div className="home-access__item-text">
                        مستندات فنی زیرساخت ابر آروان
                    </div>
                </a>
                <a href="#" className="home-access__item">
                    <div className="home-access__item-image">
                        <QuestionIcon />
                    </div>
                    <div className="home-access__item-title">
                        پرسش‌های رایج
                    </div>
                    <div className="home-access__item-text">
                        پاسخ‌هایی ساده و کوتاه به رایج‌ترین پرسش‌های شما
                    </div>
                </a>
                <a href="#" className="home-access__item">
                    <div className="home-access__item-image">
                        <UsersIcon />
                    </div>
                    <div className="home-access__item-title">
                        انجمن آروان
                    </div>
                    <div className="home-access__item-text">
                        جایی برای گفت‌وگو درباره‌ی محصولات و چالش‌های ابری
                    </div>
                </a>
            </div>
        </div>
    );
}

export default HomeAccess;