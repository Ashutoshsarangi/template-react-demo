import ContentCard from "../../components/ContactCard/ContentCard";
import Nick from "../../assets/nick.jpeg";
import Sonu from "../../assets/sonu.jpg";
import Jhia from "../../assets/jhia.jpg";
import Eleni from "../../assets/eleni.jpeg";

const Contact = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ContentCard
        imageSrc={Nick}
        name="Nick Panagi"
        phoneNo="+35799957077"
        phoneTxt="+357 99957077"
      />
      <ContentCard
        imageSrc={Sonu}
        name="Subha"
        phoneNo="+35795744640"
        phoneTxt="+357 95744640"
      />
      <ContentCard
        imageSrc={Eleni}
        name="Eleni Kitromilidou"
        phoneNo="+35799049148"
        phoneTxt="+357 99049148"
      />

      <ContentCard
        imageSrc={Jhia}
        name="Ayushee"
        phoneNo="+917745972269"
        phoneTxt="+91 7745972269"
      />
    </div>
  );
};

export default Contact;
