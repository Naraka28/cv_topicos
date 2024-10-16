/* eslint-disable react/jsx-key */

import { PortfolioItem } from "./PortfolioItem"
import portfolio from "../data/portfolio"

export function Portfolio(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cls-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map(project =>(
                    <PortfolioItem
                    title={project.title}
                    imgUrl={project.imgUrl}
                    stack={project.stack}
                    link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}