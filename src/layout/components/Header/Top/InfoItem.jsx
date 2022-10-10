import {Link} from "@mui/material";

function InfoItem({ text }) {
    return (
        <Link href={`tel:${text}`}>
            {text}
        </Link>
    )
}

export default InfoItem