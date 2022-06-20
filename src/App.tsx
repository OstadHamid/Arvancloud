import { useEffect, useRef, useState } from 'react';
import CdnMap from './components/home/CdnMap';
import CdnStatistics from './components/home/CdnStatistics';
import CustomersLogo from './components/home/CustomersLogo';
import CustomersQuote from './components/home/CustomersQuote';
import IntroBox from './components/home/IntroBox';
import HomeTabContent from './components/home/ProductsTabContent';
import Header from './components/layouts/Header';
import SolutionTabContent from './components/home/SolutionTabContent';
import HomeAccess from './components/home/HomeAccess';
import Footer from './components/layouts/Footer';
import Loading from './components/layouts/Loading';

const App = () => {
  const loader = useRef<HTMLDivElement>(null);
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loader.current?.classList.add('fade');
    setTimeout(() => {
      loader.current?.remove()
      app.current?.classList.remove('d-none');
    }, 2700)
  }, []);


  return (
    <>
      <div className="loader" ref={loader}>
        <Loading />
      </div>
      <div className="App d-none" ref={app}>
        <Header />
        <section className="home-intro">
          <IntroBox />
        </section>
        <section className="home-products">
          <div className="container">
            <div className="home-products__title">
              محصولات ابری آروان
            </div>
            <div className="home-products__subtitle">
              پوشش کامل نیازهای شما برای راه‌اندازی کسب‌وکاری آنلاین
            </div>
          </div>
          <HomeTabContent />
        </section>
        <section className="home-customers">
          <div className="container">
            <div className="d-flex justify-content-between aligitems-center">
              <div className="home-customers__content">
                <div className="home-customers__title">
                  ابر آروان از نگاه مشتریان
                </div>
                <div className="home-customers__subtitle">
                  کسب‌وکارهایی که به ما اعتماد کرده‌اند
                </div>
                <div className="home-customers__text">
                  بیش از ۸۰ هزار مشتری تا کنون از محصولات ابر آروان استفاده کرده‌اند.
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <CustomersQuote />
            <div className="home-customers__logo-wrapper home-customers__logo-wrapper--reverse">
              <CustomersLogo />
              <CustomersLogo />
            </div>
          </div>
        </section>

        <section className="home-cdn">
          <div className="container">
            <div className="home-cdn__content">
              <div>
                <div className="home-cdn__title">
                  شبکه ابر آروان
                </div>
                <div className="home-cdn__subtitle">
                  گستره‌ای به وسعت جهان
                </div>
              </div>
              <div>
                <div className="home-cdn__text">
                  ابر آروان با شبکه‌ی گسترده‌ای از پاپ‌سایت‌ها و دیتاسنترها در نقاط مهم ایران و جهان پایداری و دسترسی‌پذیری منحصر به فردی را در اختیارتان قرار می‌دهد. هر روز ترافیک میلیون‌ها کاربر از سرورهای لبه‌ی ابر آروان عبور می‌کند و بیش از ۸۰ هزار کسب‌وکار تا کنون به ابر آروان اعتماد کرده‌اند.
                </div>
              </div>
            </div>
            <CdnMap />
            <CdnStatistics />

          </div>
        </section>

        <section className="home-solutions">
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
        </section>

        <section className="home-cta">
          <div className="container">
            <div className="home-cta__box">
              <div className="home-cta__box-content">
                <div className="home-cta__title">
                  مهاجرتی امن به زیرساخت ابری
                </div>
                <div className="home-cta__subtitle">
                  متخصصان کوچ ابری آروان، در مهاجرتی امن و بی‌دغدغه همراه و راهنمای شما خواهند بود.
                </div>
                <div className="home-cta__btn-wrapper">
                  <a href="#" className="btn btn-primary home-cta__btn start">
                    ثبت درخواست
                  </a>
                  <a href="#" className="btn btn-outline-primary home-cta__btn contact">
                    تماس با فروش
                  </a>
                </div>
              </div>
              <div className="home-cta__image">
                <div className="home-cta__image--mobile">
                  <img src="/images/cta-desktop.svg" loading="lazy" alt="زیرساخت یکپارچه ابر آروان" />
                </div>
                <div className="home-cta__image--desktop">
                  <img src="/images/cta-desktop.svg" loading="lazy" alt="زیرساخت یکپارچه ابر آروان" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-access">
          <HomeAccess />
        </section>

        <Footer />

      </div>
    </>
  );
}

export default App;
