import { useState } from "react";
import { ArrowLeftIcon, BoxIcon, CdnIcon, CloudUpIcon, ServerIcon, VideoIcon } from "../icons/IconPack";
import { HomeProducts } from "../data";

const ProductsTabContent = () => {
    const [tab, setTab] = useState("tab1")

    return (
        <>
            <div className="home-products__tab-wrapper">
                <div className={tab == "tab1" ? "home-products__tab active" : "home-products__tab"} onClick={() => setTab("tab1")}>
                    <div className="home-products__tab-image">
                        <CdnIcon active={tab == "tab1" && true} />
                    </div>
                    <div>
                        <h2 className="home-products__tab-title">
                            شبکه توزیع محتوا
                        </h2>
                    </div>
                </div>
                <div className={tab == "tab2" ? "home-products__tab active" : "home-products__tab"} onClick={() => setTab("tab2")}>
                    <div className="home-products__tab-image">
                        <ServerIcon active={tab == "tab2" && true} />
                    </div>
                    <div>
                        <h2 className="home-products__tab-title">
                            سرور ابری
                        </h2>
                    </div>
                </div>
                <div className={tab == "tab3" ? "home-products__tab active" : "home-products__tab"} onClick={() => setTab("tab3")}>
                    <div className="home-products__tab-image">
                        <CloudUpIcon active={tab == "tab3" && true} />
                    </div>
                    <div>
                        <h2 className="home-products__tab-title">
                            فضای ابری
                        </h2>
                    </div>
                </div>
                <div className={tab == "tab4" ? "home-products__tab active" : "home-products__tab"} onClick={() => setTab("tab4")}>
                    <div className="home-products__tab-image">
                        <VideoIcon active={tab == "tab4" && true} />
                    </div>
                    <div>
                        <h2 className="home-products__tab-title">
                            پلتفرم ویدیو
                        </h2>
                    </div>
                </div>
                <div className={tab == "tab5" ? "home-products__tab active" : "home-products__tab"} onClick={() => setTab("tab5")}>
                    <div className="home-products__tab-image">
                        <BoxIcon active={tab == "tab5" && true} />
                    </div>
                    <div>
                        <h2 className="home-products__tab-title">
                            کانتینر ابری
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="home-products__panels">
                    {
                        HomeProducts.map((product, index) => {
                            return (
                                <div className={tab == `tab${product.id}` ? "home-products__panel active" : "home-products__panel"} key={product.id}>
                                    <div className="home-products__panel-content">
                                        <div>
                                            <div className="home-products__panel-title">
                                                {product.name}
                                            </div>
                                            <div className="home-products__panel-text">
                                                {product.description}
                                            </div>
                                            <a href="#" className="home-products__panel-link">
                                                بیش‌تر بدانید
                                                <ArrowLeftIcon />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="home-products__panel-image">
                                        <img src={product.imgUrl} loading="lazy" alt={product.name} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default ProductsTabContent;