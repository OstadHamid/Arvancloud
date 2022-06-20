import { CustomersQuotes } from "../data";
import { LahzeNegarLogo, NeshanLogo, PasargadLogo, ZarinPalLogo } from "../icons/LogoPack";

const CustomersQuote = () => {

    return (
        <div className="home-customers__card-wrapper">
            {
                CustomersQuotes.map(quote => {
                    return (
                        <div className="home-customers__card" key={quote.id}>
                            <div className="home-customers__card-image-1">
                                {quote.img}
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className="home-customers__card-text">
                                    {quote.text}
                                </div>
                                <div className="home-customers__card-author">
                                    {quote.author}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default CustomersQuote;