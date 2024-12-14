import { Button } from "@/components/ui/button";
import Header from "@/components/ui/custom/Header";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../service/GlobalApi";
import ResumePreview from "@/dashboard/resume/components/ResumePreview";
import { RWebShare } from "react-web-share";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeid } = useParams();
  useEffect(() => {
    GetResumeInfo();
  }, []);
  const GetResumeInfo = () => {
    GlobalApi.GetResumeByID(resumeid).then((resp) => {
      // console.log(resp.data.data);
      setResumeInfo(resp.data.data);
    });
  };

  const HandleDownload = () => {
    window.print();
  }

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
        <div id="no-print">
      <Header />
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <h1 className="text-center text-2xl font-medium">
          Congrats! Your Ultimate Resume is ready!
        </h1>
        <p className="text-center text-gray-400">
          Now you are ready to download and share your resume with your family
          and friends
        </p>
        <div className="flex justify-between  my-8 px-40">
          <Button onClick={HandleDownload}>Download</Button>
          <RWebShare
        data={{
          text: "Hello Everyone, This is my resume please open URl to see",
          url: import.meta.env.VITE_BASE_URL+"/my-resume"+resumeid+"/view",
          title: resumeInfo?.firstName+" "+resumeInfo?.lastName+ "resume",
        }}
        onClick={() => console.log("shared successfully!")}
      >
          <Button>Share</Button>
          </RWebShare>
        </div>
        </div>
      </div>
      <div id="print-area" className="my-10 mx-10 md:mx-20 lg:mx-36">
          <ResumePreview />
        </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
