import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import StudentsCardDesktop from "@/components/StudentsCardDesktop/StudentsCardDesktop";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="my-10">
        <StudentsCardDesktop />
      </div>
      <Footer/>
      
    </div>
  );
}
