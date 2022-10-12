import './About.scss';
import images from "~/assets/images";

function About() {
    return (
        <div className="element-about">
            <div className="thumbnail">
                <img src={images.productDefault} alt="about" />
            </div>

            <div className="right-box">
                <h4 className="title">GET DESIGN</h4>

                <div className="content">
                    <p>Đào tạo Cầm tay – Chỉ việc</p>

                    <p>
                        Để đảm bảo chất lượng, mỗi khung giờ học chúng tôi luôn giới hạn số lượng học viên, vì vậy sẽ có nhiều thời gian hướng dẫn trực tiếp từng học viên một cách chu đáo và tận tình nhất. Đây cũng chính là điểm khác biệt tạo nên hiệu quả của chương trình đào tạo mà chúng tôi muốn mang đến các học viên của mình.
                    </p>
                </div>

                <div className="contact">
                    <p className="label">Liên hệ với Hotline</p>

                    <p><a href="tel:0911321300">0911 321 300</a> để được tư vấn khóa học phù hợp với bạn</p>
                </div>
            </div>
        </div>
    )
}

export default About