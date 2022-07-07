const About = () => {
  return (
    <div
      className="text-white bg-opacity-5 bg-[#74E0EF] w-full text-center overflow-x-hidden pt-64"
      id="about"
    >
      <div className="w-full text-5xl pt-16">
        One Platform<br></br>
      </div>
      <div className="w-full text-center text-5xl pt-4">
        {" "}
        For All Your<br></br>
      </div>
      <div className="w-full text-center text-5xl pt-4">
        {" "}
        Events<br></br>
      </div>
      <div className="w-full text-lg px-10 text-justify pt-24">
        Build a DAO-styled event organization where organizers can outsource
        their needs as bounties. Further, handle certificates, ticketing and
        incetivization with NFTs. Turn your events into souvenir NFTs.
      </div>
      <div className="mt-16 text-xl">
        <img src="../../images/Certificates.svg" className="mx-auto"></img>
        <div>Certification</div>
      </div>
      <div className="mt-12 text-xl">
        <img src="../../images/Incentives.svg" className="mx-auto"></img>
        <div>Incentivization</div>
      </div>
      <div className="mt-12 text-xl">
        <img src="../../images/Souvenir.svg" className="mx-auto"></img>
        <div>Souvenir</div>
      </div>
      <div className="mt-12 text-xl">
        <img src="../../images/Ticketing.svg" className="mx-auto"></img>
        <div>Ticketing</div>
      </div>
      <div className="mt-12 mb-8 text-xl">
        <div className="text-6xl">DAO</div>
        <div className="text-xl mt-4">Event DAO's</div>
      </div>
    </div>
  );
};

export default About;
