import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { AIchatSession } from "./../../../../../service/AIModel";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of summary for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summary and experience_level Field in JSON Format";

function Summary({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);

  useEffect(() => {
    if (summary) {
      setResumeInfo({
        ...resumeInfo,
        summary,
      });
    }
  }, [summary]);

  const GenerateSummaryFromAI = async () => {
    setLoading(true);
    try {
      const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle || "Job");
      console.log("Prompt sent:", PROMPT);

      const result = await AIchatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();
      console.log("Raw AI response:", responseText);

      // Parse the response text and extract summaries
      const parsedData = JSON.parse(responseText);
      const summaries = parsedData.experience_levels || [];
      setAiGeneratedSummaryList(summaries);
    } catch (error) {
      console.error("Error generating summaries:", error);
      toast.error("Failed to generate summaries. Please try again.");
      setAiGeneratedSummaryList([]);
    } finally {
      setLoading(false);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        summary,
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeid, data)
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details updated");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Details not updated");
      });
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              variant="outline"
              onClick={GenerateSummaryFromAI}
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
            >
              <Brain className="h-4 w-4" /> Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            value={summary}
            defaultValue={resumeInfo?.summary || ""}
            onChange={(e) => setSummary(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummaryList.length > 0 ? (
        <div className="mt-5">
          {aiGeneratedSummaryList.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummary(item.summary[0])} // Use the first summary from the array
              className="p-5 shadow-lg my-4 rounded-lg cursor-pointer border border-gray-300 hover:shadow-xl transition-all"
            >
              <h2 className="font-bold my-1 text-primary">
                Experience Level: {item.experience_level}
              </h2>
              <p>{item.summary[0]}</p> {/* Display the first summary */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No suggestions available.</p>
      )}
    </div>
  );
}

export default Summary;



