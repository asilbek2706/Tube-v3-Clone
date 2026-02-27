import {Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";

const Channel = () => {
    const params = useParams()

    return (
        <>
            <h1>Channel</h1>
            <Link to="/">
                <Button>Main</Button>
            </Link>
        </>
    )
}

export default Channel;