import { json } from "react-router-dom";

const getStoredJobApplication = () => {
   const StoredJobApplication = localStorage.getItem('job-application');
   if(StoredJobApplication){
      return JSON.parse(StoredJobApplication);
   }
   return [];
}

const saveJobApplication = id => {
   const StoredJobApplication = getStoredJobApplication();
   const exist = StoredJobApplication.find(jobId => jobId === id);

   if(!exist){
      StoredJobApplication.push(id);
      localStorage.setItem('job-application', JSON.stringify(StoredJobApplication));
   }
}

export {saveJobApplication, getStoredJobApplication};