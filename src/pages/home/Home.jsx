import "./home.scss"
import Topbar from "../../components/topbar/Topbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div role="home" className="home">
      <Topbar/>
      <Main/>
      <Footer/>
    </div>
  )
}
