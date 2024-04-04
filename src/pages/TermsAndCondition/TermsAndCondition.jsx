import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { termsAndConditions } from "./TermsAndCondition.constants";

const TermsAndCondition = (props) => {
  const { t } = useTranslation();

  return (
    <ServiceCard
      t={t}
      ourServices={termsAndConditions}
      title="terms_and_condition"
      showView={false}
    />
  );
};

export default TermsAndCondition;
