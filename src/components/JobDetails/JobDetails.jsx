import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";
import { useEffect } from "react";

const JobDetails = () => {

   const data = useLoaderData();

   const {id} = useParams();
   const idInt = parseInt(id);

   const job = data.find(job => job.id === idInt);

   const handleApplyJob = () => {
      saveJobApplication(idInt)
      toast('You have applied successfully.')
   }

   console.log(data, id);
   console.log(job);
   return (
      <div>
         <h2><span className="font-bold">Job Details of: </span>{job.job_title}</h2> <br />
         <div className="grid grid-cols-4 gap-5">
            <div className="col-span-3">
               <p><span className="font-bold">Job Description: </span> {job.job_description}</p>
               <br />
               <p><span className="font-bold">Job Description: </span> {job.job_responsibility}</p>
               <br />
               <p><span className="font-bold">Educational Requirement</span></p>
               <p>{job.educational_requirements}</p><br />
               <p><span className="font-bold">Experiences</span></p>
               <p>{job.experiences}</p>
            </div>
            <div className="col-span-1">
               <h2 className="font-extrabold">Job Details</h2><br />
               <p><span className="font-bold">Salary: </span> {job.salary}</p>
               <p><span className="font-bold">Job Title: </span> {job.job_title}</p><br />

               <h2 className="font-extrabold">Contract Information</h2><br />
               <p><span className="font-bold">Phone: </span> {job.contact_information.phone}</p>
               <p><span className="font-bold">Email: </span> {job.contact_information.email}</p>
               <p><span className="font-bold">Address: </span> {job.contact_information.address}</p>
               <br />
               <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
            </div>
         </div>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default JobDetails;