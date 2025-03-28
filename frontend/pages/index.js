import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import SurveyTable from "../components/survey/SurveyTable";

export default function Home() {
    return (
        <div>
            <Navbar />
            <SurveyTable />
            <AboutMe />
        </div>
    );
}
