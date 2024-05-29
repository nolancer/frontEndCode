"use client";
import Navbar from "@components/common/Navbar";
import HomeBanner from "@/components/page/home/HomeBanner";
import { CssBaseline } from "@mui/material";
import CompaniesCarousal from "@/components/page/home/CompaniesCarousal";
import WorkCategories from "@components/page/home/WorkCategories/index";
import HireCertifiedTalent from "@components/page/home/HireCertifiedTalent";
import JoinUsBanner from "@components/page/home/JoinUsBanner";
import ReasonToUseBlock from "@components/page/home/ReasonToUseBlock";
import Footer from "@/components/common/Footer";
import InterestedInLearningMore from "@/components/page/home/InterestedInLearningMore";

export default function Home() {
  return (
    <main>
      <CssBaseline />

      <Navbar />

      <section className="pt-[110px]" aria-label="body">
        <div className="mx-4 sm:mx-6">
          <HomeBanner />

          <div className="mt-10 block sm:hidden">
            <CompaniesCarousal />
          </div>

          <div className="mt-16 sm:mt-auto">
            <WorkCategories />
          </div>
        </div>

        <div className="mt-10 mx-0 sm:mx-6">
          <HireCertifiedTalent />
        </div>

        <div className="mx-4 sm:mx-6">
          {/* @RESPONSIVEDONE */}
          <div>
            <JoinUsBanner />
          </div>
          <div className="mt-10">
            <ReasonToUseBlock />
          </div>
          {/* */}
        </div>
        <div className="mt-10 mx-0 sm:mx-6">
          <InterestedInLearningMore />
        </div>
      </section>
      <div className="mt-10">
        <Footer />
      </div>
    </main>
  );
}
