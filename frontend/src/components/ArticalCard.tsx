import Images from "../constants/images"
import { ArticalCard } from "../interfaces/ArticalCard"

function ArticalCardItem({ style, id, img, description, heading, date, auther }: ArticalCard) {
    return (
        <div className={`${style} rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}>
            <img src={img} className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60" alt={heading} />
            <div className="p-5">
                <div className="flex flex-col">
                    <h2 className="text-dark-soft font-bold text-xl font-opensans md:text-2xl">{heading}</h2>
                    <p className="font-opensans text-dark-light mt-3 text-sm md:text-base">{description}</p>
                </div>
                <div className="flex justify-between flex-nowrap items-center mt-6 ">
                    <div className="flex items-center gap-x-2 md:gap-x-2.5">
                        <img src={auther.img} alt={auther.name} className="w-9 h-9 md:w-10 md:h-10" />
                        <div>
                            <h4 className="font-bold italic text-dark-soft text-sm md:text-base">{auther.name}</h4>
                            <p>
                                <>
                                    {auther.isverified ? <div className="flex items-center">
                                        <img className="w-4 h-4 me-2" src={Images.Verified} alt="" />
                                        <span className="italic text-dark-light text-xs md:text-sm">Verified writer</span>
                                    </div> : false}
                                </>
                            </p>
                        </div>
                    </div>
                    <span className="italic text-base text-dark-light font-bold md:text-base">02 May</span>
                </div>
            </div>
        </div>
    )
}

export default ArticalCardItem