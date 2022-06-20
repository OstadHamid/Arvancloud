import { CdnStatisticsData } from "../data";
import { DocumentIcon, FlagIcon, ShieldCheckIcon, TimeIcon, UserIcon } from "../icons/IconPack";

const CdnStatistics = () => {
    return (
        <div className="home-cdn__item-wrapper">
            {
                CdnStatisticsData.map(statistic => {
                    return (
                        <div className="home-cdn__item" key={statistic.id}>
                            <div className="home-cdn__item-image">
                                {statistic.icon}
                            </div>
                            <div>
                                <div className="home-cdn__item-value">{statistic.title}</div>
                                <div className="home-cdn__item-title">{statistic.text}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CdnStatistics;