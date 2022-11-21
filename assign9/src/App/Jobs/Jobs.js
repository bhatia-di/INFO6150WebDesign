import React from "react";
import { CardDetail } from "../Components/CardDetail";
import { LoggedOut } from "../Components/LoggedOut";

export const Jobs = (JobsProps) => {

    if (JobsProps.loggedIn === false) {
        return <LoggedOut/>;
    }

    const jobsList = [ 
        {
            "title": "Job 1",
            "subtitle": "some details about the job 1",
            "body": "Chemical changes occur when a substance combines with another to form a new substance, called chemical synthesis or, alternatively, chemical decomposition into two or more different substances. These processes are called chemical reactions and, in general, are not reversible except by further chemical reactions. Some reactions produce heat and are called exothermic reactions and others may require heat to enable the reaction to occur, which are called endothermic reactions. Understanding chemical changes is a major part of the science of chemistry.  "
        },
        {
            "title": "Job 2",
            "subtitle": "some details about the job 2",
            "body": "When chemical reactions occur, the atoms are rearranged and the reaction is accompanied by an energy change as new products are generated. An example of a chemical change is the reaction between sodium and water to produce sodium hydroxide and hydrogen. So much energy is released that the hydrogen gas released spontaneously burns in the air. This is an example of a chemical change because the end products are chemically different from the substances before the chemical reaction.            "
        }
    ];

    return (
        <div className="container">
            <CardDetail title={"Jobs Page"} subtitle={"job details: "} />

                {
                jobsList.map((element, index) => 
                    {
                        return <CardDetail  key={'card' + index} title={element.title} subtitle={element.subtitle} body={element.body} />
                    }
                )
                }



        </div>
    );


};

