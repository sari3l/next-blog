import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { PropsWithChildren } from "react";
import Alert from "@/components/layoutPlugin/alert";
import { Config } from "@/config/config";

const MainLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  {
    return (
      <div className="flex flex-col">
        <div className="flex pb-8">
          <Header />
        </div>
        {Config.alert.enable && <Alert>{Config.alert.text}</Alert>}
        <main className="flex grow justify-center">{children}</main>
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    );
  }
};

export default MainLayout;
