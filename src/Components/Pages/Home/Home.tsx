
import "./Home.css";
import image1 from  "../../../assets/Images/javaImage.jpg";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <p>THIS IS MAIN</p>
            <img src={image1} alt="Java"/>
			
        </div>
    );
}

export default Home;
