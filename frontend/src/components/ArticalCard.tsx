import Images from "../constants/images"
import { ArticalCard } from "../interfaces/ArticalCard"

function ArticalCardItem({ style, id, img, description, heading, date, auther }: ArticalCard) {
    console.log(id)
    return (
        <div className={`${style} rounded-2xl bg-white`}>
            <img src={img} className="w-full" alt={heading} />
            <div className="p-4">
                <div className="flex flex-col">
                    <h2 className="text-dark-hard font-bold font-opensans">{heading}</h2>
                    <p className="font-opensans text-dark-light mt-3">{description}</p>
                </div>
                <div>
                    <div>
                        <img src={auther.img} alt={auther.name} />
                        <div>
                            <h4>{auther.name}</h4>
                            <p>
                                <>
                                    {auther.isverified ? <>
                                        <img src={Images.Verified} alt="" />
                                        <span>Verified writer</span>
                                    </> : false}
                                </>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticalCardItem