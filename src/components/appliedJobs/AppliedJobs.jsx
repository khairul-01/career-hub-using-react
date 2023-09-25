import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";

const AppliedJobs = () => {

   const jobs = useLoaderData();

   const [addJob, setAddJob] = useState([]);

   useEffect(()=>{
      const storedJobId = getStoredJobApplication();
      if(jobs.length > 0) {
         // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))
         const jobsApplied = [];
         for(const id of storedJobId){
            const job = jobs.find(job => job.id===id)
            if(job){
               jobsApplied.push(job)
            }
         }
         console.log(jobsApplied);
         setAddJob(jobsApplied);
      }
   },[])

   return (
      <div>
         <h2>Jobs I Applied: {addJob.length} </h2>
      </div>
   );
};

export default AppliedJobs;