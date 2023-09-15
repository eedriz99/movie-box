import { useState } from "react";
import "./App.css";
import { BsPlayCircleFill } from "react-icons/bs";
import logo from "./assets/tv.png";
import signInIcon from "./assets/Menu.png";
import tomato_icon from "./assets/tomato_logo.png";
import imdb_icon from "./assets/imdb_logo.png";

function App() {
  return (
    <>
      <header className="h-[90vh] bg-[url('./assets/Poster.png')] text-white">
        <nav className="flex justify-between p-4 px-8 bg-transparent border-b-2 ">
          <a href="/" className="flex items-center text-[25px]">
            <img src={logo} alt="movie box logo" className="h-[35px] mr-4" />
            <span>Movie Box</span>
          </a>

          <form
            action="#"
            method="post"
            className="border-2 rounded-lg overflow-hidden w-[400px]"
          >
            <input
              type="search"
              name="searchbtn"
              id="searchbtn"
              placeholder="What do you want to watch?"
              className="border-r p-1 pl-3 bg-transparent w-[80%]"
            />
            <input type="submit" value="submit" className="p-1" />
          </form>
          <button type="submit" className="flex items-center">
            <span>Sign in</span>{" "}
            <img
              src={signInIcon}
              alt="Sign-in icon"
              className="h-[30px] w-[30px] ml-4"
            />
          </button>
        </nav>
        <div className="w-[25%] ml-[60px] mt-[100px]">
          <h2 className="text-[50px] leading-[60px] font-medium">
            John Wick 3 : Parabellum
          </h2>
          <div className="flex text-sm my-3">
            <span className="w-1/2 flex items-center">
              <img src={imdb_icon} alt="IMDB icon" className="mr-2" />
              <span>86.0/100</span>
            </span>{" "}
            <span className="w-1/2 flex items-center">
              <img
                src={tomato_icon}
                alt="Rotten tomato rating icon"
                className="mr-2"
              />
              <span>97%</span>
            </span>
          </div>
          <p className="">
            John Wick is on the run after killing a member of the international
            assassin's guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="flex items-center border border-[#ee2121] text-sm font-medium my-3 p-1 px-2 rounded-lg bg-[#ee2121] uppercase hover:text-[#ee2121] hover:bg-transparent">
            <BsPlayCircleFill className="mr-1"/>
            Watch trailer
          </button>
        </div>
      </header>
      <section>

        <h3 className="">
          Featured Movies
        </h3>
      </section>
    </>
  );
}

export default App;
