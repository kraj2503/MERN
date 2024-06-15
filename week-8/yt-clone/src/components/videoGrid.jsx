import { YT } from "./YT"

const VIDEOS = [{
    title: "I Need To Buy This Car Mika Häkkinen",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
{
    title: "Video 2 | F1 Pirelli Hot Laps",
    videoImg: "./pic-1.png",
    chnnelImg: "./f1.jpg",
    channelName: "FORMULA 1",
    views: "13M",
    timeStamp: "13 days ago",
},
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer ">
        {VIDEOS.map(video => <div>

            <YT
                title={video.title} videoImg={video.videoImg}
                chnnelImg={video.chnnelImg}
                channelName={video.channelName}
                views={video.views}
                timeStamp={video.timeStamp}

            />
        </div>

        )}
    </div>
}