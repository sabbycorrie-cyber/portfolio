import { Link } from "react-router-dom";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <div className="about-card">
                <div className="code-window">
                    <div className="code-header">
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <span>AboutMe.js</span>
                    </div>

<pre>
<span className="keyword">const</span>{" "}
<span className="variable">name</span> ={" "}
<span className="string">"Sabantho Corrie-Edghill"</span>;

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">role</span> ={" "}
<span className="string">"Front-End Developer"</span>;

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">studio</span> ={" "}
<span className="string">"Co-founder, Studio 246"</span>;

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">certified</span> ={" "}
<span className="string">"Front-End Development, Sundsgårdens folkhögskola, 2026"</span>;

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">stack</span> = [
{"\n"}
{"  "}<span className="string">"React"</span>,{" "}
<span className="string">"JavaScript"</span>,{" "}
<span className="string">"HTML"</span>,{" "}
<span className="string">"CSS"</span>,{" "}
<span className="string">"Sass"</span>,
{"\n"}
{"  "}<span className="string">"Supabase"</span>,{" "}
<span className="string">"PostgreSQL"</span>,{" "}
<span className="string">"Vite"</span>,{" "}
<span className="string">"Git"</span>,
{"\n"}
];

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">shipped</span> = [
{"\n"}
{"  "}<span className="string">"Guess246: live, 120+ locations, multiplayer"</span>,
{"\n"}
{"  "}<span className="string">"Studio 246: the studio site"</span>,
{"\n"}
{"  "}<span className="string">"GuessGeo: the prototype it grew from"</span>,
{"\n"}
];

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">howIBuild</span> ={" "}
<span className="string">"Vibe coding, then read every line of it"</span>;

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">interests</span> = [
{"\n"}
{"  "}<span className="string">"Illustration"</span>,{" "}
<span className="string">"Storytelling"</span>,{" "}
<span className="string">"UI Design"</span>,
{"\n"}
];

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">available</span> ={" "}
<span className="number">true</span>;{" "}
<span className="comment">// open to roles and freelance</span>

{"\n\n"}

<span className="keyword">const</span>{" "}
<span className="variable">summary</span> ={" "}
<span className="string">
    "Create engaging, accessible and meaningful digital experiences"
</span>;
</pre>
                </div>

                <div className="about-content">
                    <h2>The longer version</h2>

                    <p>
                        I certified in front-end development at Sundsgårdens
                        folkhögskola in June 2026 and have been building ever
                        since. Studio 246, the Barbadian studio I co-founded, is
                        where that shows: Guess246 started as a browser game and
                        turned into a production app with a Postgres database,
                        Row Level Security, real-time multiplayer rooms and a
                        Google Street View integration, installable as a PWA.
                    </p>

                    <p>
                        I vibe code, and I'm not quiet about it. AI tooling is
                        how I move fast, but nothing ships that I haven't read,
                        run and understood. The security policies, the API-key
                        restrictions and the launch checklist behind Guess246
                        exist because I went looking for what could break, not
                        because a prompt produced them.
                    </p>

                    <p>
                        <Link to="/services" className="about-link">
                            See what I do
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
