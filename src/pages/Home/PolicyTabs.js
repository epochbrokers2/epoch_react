import React from "react";
import HomePolicySlider from "./HomePolicySlider";
function PolicyTabs(props) {
    const [visibleTab, setVisibleTab] = React.useState(props.data[0].id);

    const listTitles = props.data.map((item) => (
        <div
            onClick={() => setVisibleTab(item.id)}
            className={
                visibleTab === item.id
                    ? "tab-title tab-title--active"
                    : "tab-title"
            }
        >
            <div className="img-div">
                <img src={`images/img/policy/${item.img_name}.webp`} />
            </div>
            <div className="tab-title_head">{item.tabTitle}</div>
            <div className="tab-title_buy">Compare / Buy</div>

        </div>
    ));

    const listContent = props.data.map((item) => (
        <HomePolicySlider sliderNumber={item.tabContent} style={visibleTab === item.id ? {} : { display: "none" }} /> 
    ));

    return (
        <div className="home_policy">
            <div className="container">
                <div className="home_policy_tab">{listTitles}</div>
                <div className="tab-content">
                    {/* <HomePolicySlider listContent = {listContent} /> */}
                    {listContent}
                </div>
            </div>
        </div>
    );
}
export default PolicyTabs