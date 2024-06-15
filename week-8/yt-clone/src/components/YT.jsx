

export function YT(props) {

    return (
        <div className="m-4">
            <img src={props.videoImg} className="rounded-2xl"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full w-15 h-15" src={props.chnnelImg}></img>

                </div>
                <div className="col-span-11 pl-5">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11  text-gray-400 text-base">
                        {props.channelName}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.views} views | {props.timeStamp}
                    </div>
                </div>

            </div>

        </div>


    )
}