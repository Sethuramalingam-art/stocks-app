import {Button} from "@/components/ui/button";
import TradingViewWidgets from "@/components/TradingViewWidgets";
import {HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG} from "@/lib/contants";

const Home = () => {
    const scriptURL = "https://s3.tradingview.com/external-embedding/embed-widget-"
    return (

        <div className="flex min-h-screen home-wrapper">
           <section className="grid w-full gap-8 home-section">
               <div className="md:col-span-1"><TradingViewWidgets title="Market Overview" scriptUrl={`${scriptURL}market-overview.js`} className="cutom-chart" config={MARKET_DATA_WIDGET_CONFIG} height={600} /></div>
               <div className="md:col-span-2"><TradingViewWidgets title="Stock Heatmap" scriptUrl={`${scriptURL}stock-heatmap.js`} className="cutom-chart" config={HEATMAP_WIDGET_CONFIG} height={600} /></div>
           </section>
            <section className="grid w-full gap-8 home-section">
                <div className="h-full md:col-span-1"><TradingViewWidgets title="Market Overview" scriptUrl={`${scriptURL}timeline.js`} className="cutom-chart" config={TOP_STORIES_WIDGET_CONFIG} height={600} /></div>
                <div className="h-full md:col-span-2"><TradingViewWidgets title="Stock Heatmap" scriptUrl={`${scriptURL}market-quotes.js`} className="cutom-chart" config={MARKET_DATA_WIDGET_CONFIG} height={600} /></div>
            </section>
        </div>
    )
}
export default Home;



