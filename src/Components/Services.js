import Heading from "../UI/Heading";
import Swipe from "../Components/Swipe";
import { team } from "../Assets/asset";

const Services = () => {
  return (
    <div id="services" className="mt-36 mx-auto w-full xl:w-[70%]">
      <Heading name="Our Services" />
      <Swipe />
      <div className="mt-20 mx-auto flex flex-col justify-center items-center space-x-0 space-y-4 xl:flex-row xl:justify-between p-10 bg-gray-100 rounded-tl-[100px] rounded-br-[100px] shadow-sm">
        <div className="w-full h-full xl:w-1/2 ">{team}</div>
        <div className="w-full h-full xl:w-1/2 flex justify-center items-center ">
          <div className="flex flex-col items-center xl:items-start space-y-4 w-full">
            <h1 className="text-primary text-4xl underline underline-offset-8 decoration-action">
              Join Us For:
            </h1>
            <ul className=" font-sans text-secondary list-decimal text-2xl space-y-3 ml-10">
              <li>
                Start of Business:
                <ul className="text-tertiary font-sans list-disc text-xl ml-10 opacity-50">
                  <li>Business Idea Valuations</li>
                  <li>Business Plan Development</li>
                  <li>Legal and Compliance setups</li>
                </ul>
              </li>
              <li>
                Continuation of Business:
                <ul className="text-tertiary font-sans list-disc text-xl ml-10 w-full opacity-50">
                  <li>Growth strategy implementation</li>
                  <li>Operational Excellence</li>
                  <li>Performance monitoring</li>
                  <li className="w-full">Taxation, Legal and other supports</li>
                </ul>
              </li>
              <li>
                Closure of Business:
                <ul className="text-tertiary font-sans list-disc text-xl ml-10 opacity-50">
                  <li>Merger Acquisition</li>
                  <li>Assets Valutation and liquidations</li>
                  <li>Legal and Compliance setups</li>
                  <li>Post Closure supports</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
