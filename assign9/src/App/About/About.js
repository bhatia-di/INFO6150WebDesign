import React from "react";
import { CardDetail } from "../Components/CardDetail";
import { LoggedOut } from "../Components/LoggedOut";

export const About = (AboutProps) => {

    if (AboutProps.loggedIn === false) {
        return <LoggedOut/>;
    }


    return (
        
        <div className="container">
            <CardDetail title={"About Page"} subtitle={"some quick details about us "}
             body={"Mark your calendar: Cyber Monday deals will be available on Amazon starting on Saturday, November 26. We’re offering a sneak peek at some of the top deals for this year’s three-day shopping event, including up to 70% off select Alexa-enabled devices, and up to 60% off select Ring and Blink home security devices and accessory bundles. Surprise savings will also drop every 30 minutes during select periods of the weekend event, so remember to check back often. signature programming included a fireside chat between Dr. José Hernández, an engineer and former NASA astronaut, and Diane \
              Gonzalez, Amazon’s VP of technology, Finance Automation. During the conversation, Dr. Hernández shared his incredible journey to accomplishing his childhood dream of becoming an astronaut, how his family was crucial to his success, and his goal of inspiring Hispanic youth to fulfill groundbreaking careers in science, technology, engineering, and math (STEM). \
              Amazon also welcomed Gaby Melian, a world-renowned chef and cookbook author, for a Fishbowl conversation about the impact and intricacies of Latin American food and cooking. Speaking with Antonio Hernández Crane, Amazon’s head of DEI, Global Engineering and Security Services, Melian also discussed the release of her new cookbook Gaby’s Latin American Kitchen, which pays homage to the diversity of the Latin American community and their culinary traditions and flavors.\
             \
             As part of their 10th anniversary celebrations, the Latinos at Amazon board participated in a panel discussion with Candi Castleberry, Amazon’s global vice president of DEI, where they highlighted how Hispanic employees can enhance their career trajectories and serve in the next cohort of leaders within the organization, industry, and beyond. \
             \
             To spotlight the many Hispanic employees who are building an Amazon that is more inclusive than the outside world, Latinos at Amazon also called on members of our workforce to share photos and videos showcasing how they honor and celebrate their Cultúra. These submissions were featured throughout the month across internal channels and highlighted the unique experiences, contributions, and celebrations of Hispanic employees at Amazon. "} />

        </div>
    );


};

