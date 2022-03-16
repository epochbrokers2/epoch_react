import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const data = [
    { id: "1", tabTitle: "Individual Insurance", img_name: "Individual1" },
    { id: "2", tabTitle: "Group Insurance", img_name: "Group-Insurance" },
    {
        id: "3",
        tabTitle: "Commercial Insurance",
        img_name: "Commercial-Insurance",
    },
    { id: "4", tabTitle: "Package Insurance", img_name: "Package-Insurance" },
    { id: "5", tabTitle: "Affinity Insurance", img_name: "Affinity-Insurance" },
    {
        id: "6",
        tabTitle: "Rural & Agricultural Insurance",
        img_name: "Rural-&-Agricultural-Insurance",
    },
];

function HomePolicy() {
    return (
        <section className="slider_policy_main">
            <div className="container">
                <Tabs className="Tabs">
                    <TabList className="slider_policy">
                        {data.map((item) => (
                            <Tab key={item.id} className="slider_policy_tab">
                                <div className="img_div">
                                    <img
                                        src={`images/img/policy/${item.img_name}.webp`}
                                        alt={item.img_name}
                                    />
                                </div>
                                <div className="slider_policy_tab_head">
                                    {item.tabTitle}
                                </div>
                                <div className="slider_policy_tab_buy">
                                    Compare / Buy
                                </div>
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanel  className="overview">
                        <p>Tab 1 works!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Tab 2 works!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Tab 3 works!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Tab 4 works!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Tab 5 works!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Tab 6 works!</p>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
}

export default HomePolicy;
