import { Container } from "./styles";
import { Link } from "react-router-dom";
import Prestation from "../../assets/images/presentation.png"
import { Head } from "../../components/Head";

export function Home() {
    return (
        <Container>

            <Head title="Home | JavaScript Notes" description="" />

            <div className="home__body">
                <div className="home__body__title">
                    <h2>Create notes easily and access them whenever you want in the cloud</h2>


                    <p>
                        Now you have a place to keep your notes! With our service you can save your notes for free and access them whenever and wherever you want! Your notes will always be available and safely stored
                    </p>

                    <div className="home__body__titleButton">
                        <Link to="register" alt="">
                            REGISTER FOR FREE NOW
                        </Link>
                    </div>
                </div>

                <div className="home__body__presentation">
                    <img src={Prestation} alt="" />
                </div>
            </div>
        </Container>
    )
}