import Layout from "../../components/Layout";
import { CenteredContiainer, Spacer } from "../../components/Layout/LaytoutPrimitives";
import WaterGirlSVG from "../../components/svg/WayerGirlSVG";

export default function LayoutTest() {
  return (
    <Layout>
      <div className="flex h-full">
        <Spacer />
        <CenteredContiainer extraClasses="w-1/2 h-1/2">
            <WaterGirlSVG />
        </CenteredContiainer>
        <Spacer />
      </div>
    </Layout>
  );
}
