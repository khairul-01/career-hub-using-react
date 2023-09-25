import Banner from "../Banner/Banner";
import CategoryList from "../CategoryLlist/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
   return (
      <div>         
         <Banner></Banner>
         <CategoryList></CategoryList>
         <FeaturedJobs></FeaturedJobs>
         <h2>This is Home.</h2>
      </div>
   );
};

export default Home;