import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { BtnBold, BtnBulletList, BtnItalic, BtnUnderline, Editor, EditorProvider, Toolbar } from "react-simple-wysiwyg";
import { AIchatSession } from "./../../../../service/AIModel";
import { toast } from "sonner";

const PROMPT='position title: {positionTitle} , Depends on position title give me the answer 5-7 lines for my experience in resume (Please do not add experince level and No JSON array) and the result only have just summary , give me result in HTML tags only'

function RichTextEditor({onRichTextEditorChange,index}) {
    const[value,setValue] = useState();
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [loading,setLoading]=useState(false);


    const GenerateSummaryFromAI = async() => {
      setLoading(true);
      if(!resumeInfo.experience[index].title){
        toast('Please Add Position Title');
        return ;
      }
      const prompt = PROMPT.replace('{positionTitle}',resumeInfo.experience[index].title);
      const result=await AIchatSession.sendMessage(prompt);
      // console.log(result.response.text());
      const resp=result.response.text()
      setValue(resp.replace('{','').replace('}','').replace('[','').replace(']','').replace(`"summary": `,'').replace(`"`,'').replace(`"`,''));
      setLoading(false);
    }
  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-sm ">Summary</label>
        <Button variant="outline" size="sm" className="flex gap-2 border-primary text-primary" 
         onClick={GenerateSummaryFromAI}
        >
        {loading?<LoaderCircle className="animate-spin"/>:
        <>
        <Brain className="h-4 w-4"/> Generate from AI
        </>
        }  
          </Button>
      </div>
      <EditorProvider>
        <Editor value={value} onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e)
        }}>
          <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnBulletList />
        </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
