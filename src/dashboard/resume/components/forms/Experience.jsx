import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import GlobalApi from './../../../../../service/GlobalApi'
import { useParams } from "react-router-dom";
import { toast } from "sonner";
const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: ""
};


function Experience() {
  const [experienceList, setExperienceList] = useState([formField]);
  const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);
  const params=useParams();
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    resumeInfo?.experience.length>0&&setExperienceList(resumeInfo?.experience)
    
},[])

  const handleChange=(index,event)=>{
    const newEntries=experienceList.slice();
    const {name,value}=event.target;
    newEntries[index][name]=value;
    // console.log(newEntries)
    setExperienceList(newEntries);
}

  const AddNewExperience = () => {
    setExperienceList([...experienceList, {
      title: "",
      companyName: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      workSummary: ""
    }]);
  };
  const RemoveExperience = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };
  const handleRichTextEditor = (e,name,index) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries);
  };

  useEffect(() => {
    // console.log(experienceList)
    setResumeInfo({
      ...resumeInfo,
      experience:experienceList
    });
  }, [experienceList]);
  const onSave=()=>{
    setLoading(true)
    const data={
        data:{
            experience:experienceList.map(({ id, ...rest }) => rest)
        }
    }

    //  console.log(experienceList)

    GlobalApi.UpdateResumeDetail(params.resumeid,data).then(res=>{
        // console.log(res);
        setLoading(false);
        toast('Details updated !')
    },(error)=>{
        setLoading(false);
    })

}

  return (
    <div className="p-5 shadow-lg rounded-md border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Experience</h2>
      <p>Add your previous Job experience</p>
      <div>
        {experienceList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 mt-5 ">
              <div>
                <label className="text-sm">Position Title</label>
                <Input
                  name="title"
                  value={item.title}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-sm">Company Name</label>
                <Input
                  name="companyName"
                  value={item.companyName}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-sm">City</label>
                <Input
                  name="city"
                  value={item.city}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-sm">State</label>
                <Input
                  name="state"
                  value={item.state}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-sm">Start Date</label>
                <Input
                  name="startDate"
                  type="date"
                  value={item.startDate}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-sm">End Date</label>
                <Input
                  name="endDate"
                  type="date"
                  value={item.endDate}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div className="col-span-2">
                <RichTextEditor
                index={index}
                  onRichTextEditorChange={(event) =>
                    handleRichTextEditor(event,'workSummary',index)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-primary"
            onClick={AddNewExperience}
          >
            + Add More Experience
          </Button>
          <Button
            variant="outline"
            className="text-primary"
            onClick={RemoveExperience}
          >
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
      </div>
    </div>
  );
}

export default Experience;
