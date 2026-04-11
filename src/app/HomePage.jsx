import Footer from "@/components/Footer";
import GraphicDesining from "@/components/GraphicDesining";
import Header from "@/components/Header";
import HomeBanner2 from "@/components/HomeBanner2";
import HomeBanner3 from "@/components/HomeBanner3";
import InquiryForm from "@/components/InquiryForm";
import NewAnimation from "@/components/NewAnimation";
import Reviews from "@/components/Reviews";
import StatsAndFacts from "@/components/StatsAndFacts";
import VideoEditing from "@/components/VideoEditing";

function HomePage() {
  return (
    <>
      <Header />
      <main id="home">
        <NewAnimation />
        <StatsAndFacts />
        <HomeBanner2 />
        <GraphicDesining />
        <HomeBanner3 />
        <VideoEditing />
        <Reviews />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
