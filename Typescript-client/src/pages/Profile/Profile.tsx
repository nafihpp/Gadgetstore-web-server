import ProfileImage from "../../assets/ProfileImage.jpg";
import "./Profile.css"
export const Profile = () => {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="profile-picture">
                <div className="placeholder">
                    <img
                        src={ProfileImage}
                        width="190"
                        height="190"
                        style={{ objectFit: "contain", borderRadius: "50%" }}
                    />
                </div>
            </div>
            <div className="details">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value="Mohammed Nafih Yuseph" />
                <label className="Mainlabel">Country</label>
                <input type="text" id="name" value="United Arab Emirates" />
            </div>
        </div>
    )
}
