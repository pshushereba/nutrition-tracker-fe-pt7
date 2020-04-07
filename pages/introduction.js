import Layout from "../components/Layout/index.js";
import Calculator from "../components/Calculator.js";
import MarketingSVG from "../components/svg/MarketingSVG.js";
import MarketingTop from "../components/marketing/MarketingTop.js";
import MarketingCenter from "../components/marketing/MarketingCenter.js";
import withApollo from "../lib/apollo";

const Introduction = () => {
  return (
    <>
      <Layout>
        <div className="my-8">
          <MarketingTop />
        </div>
        <div className="my-8 mr-24">
          <MarketingCenter />
        </div>
        <div className="flex justify-around">
          <div className="container-lg flex-row justify-around mx-10">
            {/* <MarketingSVG /> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withApollo(Introduction);