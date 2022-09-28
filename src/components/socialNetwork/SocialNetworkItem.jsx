function SocialNetworkItem({ link, icon, ...props }) {
    return (
        <a href={link} target={'_blank'} {...props} rel="noreferrer">
            {icon}
        </a>
    )
}

export default SocialNetworkItem