import WebProjectCard from "../../components/WebProjectCard/WebProjectCard";
import wedHighResImage from "../../assets/web/wedding/wed-high-resolution.png";
import wedLowResImage from "../../assets/web/wedding/wed-low-resolution-min.png";
import pawShopLow from "../../assets/web/pawSpa/pawShopLow.png";
import pawShopHigh from "../../assets/web/pawSpa/pawShopHigh.png";
import nickMusicLow from "../../assets/web/nickMusic/nickMusicLow.png";
import nickMusicHigh from "../../assets/web/nickMusic/nickMusicHigh.png";

const Web = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <WebProjectCard
        lowResImage={wedLowResImage}
        highResImage={wedHighResImage}
        title="Digital Wedding Invitation Card"
        description="This is a digital wedding invitation card with different language features"
        projectLink="https://ashutoshsarangi.github.io/wedding-invitation-Assu/"
      />
      <WebProjectCard
        lowResImage={pawShopLow}
        highResImage={pawShopHigh}
        title="Paw Season Spa"
        description="This is a Paw Season Spa Website"
        projectLink="https://paw-shop-demo.web.app/home"
      />

      <WebProjectCard
        lowResImage={nickMusicLow}
        highResImage={nickMusicHigh}
        title="Nick Music"
        description="This is a website is Made for Nick Music Institution."
        projectLink="https://nickpanagi.com/"
      />
    </div>
  );
};

export default Web;
