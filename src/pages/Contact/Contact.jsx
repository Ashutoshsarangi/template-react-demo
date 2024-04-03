import ContentCard from "../../components/ContactCard/ContentCard";
import Nick from "../../assets/nick.jpeg";
import Ashu from "../../assets/ashu.jpeg";

const Contact = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ContentCard imageSrc={Nick} name="Nick Panagi" phoneNo="+357 99957077" />
      <ContentCard
        imageSrc={Ashu}
        name="Ashu Sarangi"
        phoneNo="+357 95744640"
      />
    </div>
  );
};

export default Contact;
