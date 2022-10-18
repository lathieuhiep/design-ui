import {useEffect, useState} from "react"
import './Regulations.scss'
import { RegulationsAPI } from "~/api/RegulationsAPI"
import {Box} from "@mui/material";
import {LazyLoadImage} from "react-lazy-load-image-component";

function Regulations() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchRegulations = async () => {
            const result = await RegulationsAPI()

            setData(result.data)
        }

        fetchRegulations()
    }, [])

    return (
        <div className="element-about">
            <div className="thumbnail">
                {data.image && (
                    <LazyLoadImage
                        src={data.image.url}
                        alt={data.image.alt}
                        width={data.image.width}
                        height={data.image.height}
                    />
                )}
            </div>

            <div className="right-box">
                <h4 className="title">
                    {data.title}
                </h4>

                <div className="content" dangerouslySetInnerHTML={{__html: data.content}}>

                </div>

                <div className="contact">
                    <p className="label">
                        {data.title_contact}
                    </p>

                    <Box className="content-contact" dangerouslySetInnerHTML={{__html: data.content_contact}} />
                </div>
            </div>
        </div>
    )
}

export default Regulations