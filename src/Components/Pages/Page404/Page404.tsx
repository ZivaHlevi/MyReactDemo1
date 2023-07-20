import "./Page404.css";

function Page404(): JSX.Element {
    const schoolJokes: string[] = [
        "Why did the student bring a ladder to school? Because he wanted to go to high school!",
        "Why don't scientists trust atoms? Because they make up everything... just like my college essays!",
        "What did the math book say to the history book? Boy, do I have problems!",
        "Why was the music note a good student in college? Because it always took note in class!",
        "Why did the computer take its glasses to school? Because it lost all its windows!"
    ];
    const idx = Math.floor(Math.random() * schoolJokes.length);


    return (
        <div className="Page404">
            <h1>PAGE NOT FOUND</h1>
            <p>{schoolJokes[idx]}</p>
        </div>
    );
}

export default Page404;
