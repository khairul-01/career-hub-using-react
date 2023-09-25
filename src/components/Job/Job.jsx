import { MdOutlineLocationOn } from 'react-icons/md';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

   const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

   return (
      <div>
         <div className="card card-compact bg-base-100 shadow-xl text-left">
            <figure><img src={logo} alt={job_title} /></figure>
            <div className="card-body">
               <h2 className="card-title">{job_title}</h2>
               <p>{company_name}</p>
               <div>
                  <button className="px-5 py-2 font-extrabold mr-4 border rounded border-[#7E90FE] text-[#9873FF]">{remote_or_onsite}</button>
                  <button className="px-5 py-2 font-extrabold mr-4 border rounded border-[#7E90FE] text-[#9873FF]">{job_type}</button>
               </div>
               <div className='flex gap-2'>
                  <h2 className='flex gap-2'> <MdOutlineLocationOn className='text-2xl'></MdOutlineLocationOn> {location} </h2>
                  <h2 className='flex gap-2'> <BiDollarCircle className='text-2xl'></BiDollarCircle> {salary} </h2>
               </div>
               <div className="card-actions">
                  <Link to={`job/${id}`}>
                     <button className="btn btn-primary">View Details</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Job;