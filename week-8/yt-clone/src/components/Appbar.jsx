import { Searchbar } from "./Searchbar"
import Signin from "./Signin"
import { YtLogo } from "./YoutubeLogo"

export const Appbar = () => {

    return (
        <div className="flex justify-between pt-1 p-3">
            <div className="pt-1">
                <YtLogo />
            </div>
            <div>
                <Searchbar />
            </div>
            <div>
                <Signin />
            </div>
        </div>
    )

}