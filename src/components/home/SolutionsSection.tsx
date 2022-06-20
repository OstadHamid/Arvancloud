import SolutionTabContent from "./SolutionTabContent";

const SolutionsSection = () => {
    return (
        <>
            <div className="container">
                <div className="home-solutions__title">
                    راهکارهای ابری آروان
                </div>
                <div className="home-solutions__subtitle">
                    راه‌حل‌هایی برای یک معماری امن و پایدار
                </div>
                <div className="home-solutions__text">
                    شما می‌توانید متناسب با صنعت و اندازه شرکت خود یکی از راهکارهای ابری آروان را به کار گیرید. کار با محصولات ابر آروان آسان است؛ ولی اگر در زمینه‌ی راه‌اندازی هر یک از سرویس‌های ما به راهنمایی نیاز داشتید، می‌توانید با متخصصان ابری آروان تماس بگیرید تا کوچی امن، سریع و آسان را تجربه کنید.
                </div>
            </div>
            <SolutionTabContent />
        </>
    );
}

export default SolutionsSection;