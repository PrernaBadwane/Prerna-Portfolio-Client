/* eslint-disable @typescript-eslint/no-explicit-any */


const TechnologyUsed = ({ technologyLogos } : {technologyLogos:any}) => {
    console.log(technologyLogos);
    return (
        <div className="flex flex-wrap items-center gap-10">
            {
                technologyLogos?.map((technologyLogo:string, index:number) =>
                    <img key={index} src={technologyLogo} alt="" className="size-20" />
                )
            }
        </div>
    );
};

export default TechnologyUsed;