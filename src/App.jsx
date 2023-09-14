import { useState } from "react";
import "./App.css";
import logo from "./assets/tv.png";
import signInIcon from "./assets/Menu.png";

function App() {
  return (
    <>
      <header className="h-screen bg-[url('./assets/Poster.png')] text-white">
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
            <span className="w-1/2">86.0/100</span>{" "}
            <span className="w-1/2">97%</span>
          </div>
          <p className="">
            John Wick is on the run after killing a member of the international
            assassin's guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="border border-[#ee2121] text-sm font-medium my-3 p-1 px-2 rounded-lg bg-[#ee2121] uppercase hover:text-[#ee2121] hover:bg-transparent">Watch trailer</button>
        </div>
      </header>
      <section></section>
    </>
  );
}

export default App;
