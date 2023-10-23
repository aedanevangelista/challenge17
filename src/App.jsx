import LeftAside from "./components/LeftAside";
import RightAside from "./components/RightAside";

import bg from "./assets/intro-component-with-signup-form-master/images/bg-intro-desktop.png";

function App() {
  return (
    <>
      <main className="min-h-screen w-full overflow-hidden flex justify-center items-center">
        <img
          src={bg}
          alt="background"
          className="absolute bg-[#ff7c7c] w-full h-full -z-10"
        />
        <div className="w-[1440px] h-[770px] relative font-Poppins flex flex-row">
          <LeftAside />
          <RightAside />
        </div>
      </main>
    </>
  );
}

export default App;
