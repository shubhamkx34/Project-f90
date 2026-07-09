 const data = [
    {
      img: "https://media.easy-peasy.ai/1dc237bf-e779-4302-994d-9cd4cb0860d6/1bf3646b-078a-4391-963b-bf466bb60c49_medium.webp",
      text: " Nordschleife <br/>  Lap Time",
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_147_1600x1200.jpg",
      text: " 0-60 MPH Sprint <br />",
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_137_1600x1200.jpg",
      text: "  S63 Twin-Turbo <br /> V8 ",
    },
    {
      img: "https://i0.wp.com/theauto.page/wp-content/uploads/2021/01/Scoop-M5-CS-1.jpg?fit=1024%2C682&ssl=1",
      text: " Hockenheim <br /> GP ",
    },

    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_9_1600x1200.jpg",
      text: "  Carbon Diet <br />",
    },
    {
      img: "https://i.ytimg.com/vi/wAM3RTa6PXY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHEljSdxSRDQD0na6--EgdoR8nVg",
      text: " V-Max Velocity<br/>190 MPH",
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_124_1600x1200.jpg",
      text: " Lightning Lap<br />2:50.3",
    },
    {
      img: "https://mediapool.bmwgroup.com/cache/P9/202309/P90523621/P90523621-the-bmw-m5-cs-motogp-safety-car-09-2023-2250px.jpg",
      text: "MotoGP Safety Car <br />2021",
    },
  ];
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white p-2">
      <div className="pt-[32vh]  ">
        <h1 className="uppercase text-[12vw] text-black font-[font2]">Records</h1>
      </div>
      {data.map(function (elem, index) {
        return (
          <Record
            key={index}
            image={elem.img}
            Hover_text={elem.text}
          />
        );
      })}
      <div className="w-full h-full mt-[-3.5vh]"></div>
    </div>
  );