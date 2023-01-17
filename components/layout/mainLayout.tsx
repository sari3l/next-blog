import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { PropsWithChildren } from "react";
import EvaWarnning from "@/components/widget/evaWarnning";
import { Config } from "@/config/config";
import ToTop from "@/components/widget/topTop";

const MainLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  {
    return (
      <div className="flex flex-col">
        <div className="flex pb-8">
          <Header />
        </div>

        {Config.evaWarnning.enable && (
          <div className="flex mt-2">
            <EvaWarnning>{Config.evaWarnning.text}</EvaWarnning>
          </div>
        )}

        <main className="flex grow justify-center ">{children}</main>
        <div className="flex-none">
          <Footer />
        </div>
        <ToTop />
      </div>
    );
  }
};

export default MainLayout;
