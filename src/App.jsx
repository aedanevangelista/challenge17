import LeftAside from "./components/LeftAside";
import RightAside from "./components/RightAside";

import bg from "./assets/intro-component-with-signup-form-master/images/bg-intro-desktop.png";

function App() {
  return (
    <>
      <main className="min-h-screen w-full lg:overflow-hidden flex justify-center items-center relative">
        <img
          src={bg}
          alt="background"
          className="absolute bg-[#ff7c7c] h-[80rem] lg:w-full lg:h-full -z-10"
        />
        <div className="w-[1440px] h-[770px] relative font-Poppins flex flex-col lg:flex-row">
          <LeftAside />
          <RightAside />
        </div>
      </main>
    </>
  );
}

export default App;
