import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <p className="bg-gradient-to-r from-orange-500 to-green-900 text-transparent bg-clip-text">
          VirtualR build tools
        </p>
        <span className="bg-gradient-to-r from-orange-500 to-green-900 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-red-800 py-3 px-4 mx-3 rounded-md border"
        >
          Start for free
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-red-500 to-pink-800 py-3 px-4 mx-3 rounded-md border"
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 px-10  py-8 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-900 shadow-sm shadow-pink-600 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-pink-600 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
