import SocialNetworkItem from "./SocialNetworkItem";

function SocialNetwork() {
    return (
        <div className="social-network">
            <SocialNetworkItem link={'#'} icon={<i className="fa-brands fa-facebook-f"></i>} />
            <SocialNetworkItem link={'#'} icon={<i className="fa-brands fa-youtube"></i>} />
            <SocialNetworkItem link={'#'} icon={<i className="fa-brands fa-twitter"></i>} />
        </div>
    )
}

export default SocialNetwork