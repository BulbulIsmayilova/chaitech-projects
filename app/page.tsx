import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import StudentsCardDesktop from "@/components/StudentsCardDesktop/StudentsCardDesktop";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="my-15">
        <StudentsCardDesktop />
      </div>
      <Footer/>
      
    </div>
  );
}
