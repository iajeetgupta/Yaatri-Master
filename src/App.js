import './App.css'
import MainPages from './Components/Main/MainPages';
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Link, Route, Routes,   } from 'react-router-dom';
import Tour from "./Components/Tourpackage/Tour";
import Guide from "./Components/Tourguide/Guide";
import Wishlist from "./Components/Wishlist/Wishlist";
import Signups from "./Components/Signup/Signups";
import ContactApp from "./Components/Contact/ContactApp";
import FeedbackForm from './Components/Feedbacks/FeedbackForm';
// import Dashborad from './Components/Dashborad/Dashborad';
import Payment from './Components/Payment/Payment';
// import NavBar from "../src/Components/components/Header";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Homes} from "../src/Components/Pages/Homes";
import { Feedback } from "../src//Components/Pages/Feedback";
import { ContactA } from "../src/Components/Pages/ContactA";
import { SignIn } from "../src/Components/Pages/User/SignIn";
import { SignUp } from "../src/Components/Pages/User/SignUp";
import UserProfile from "../src/Components/Pages/User/UserProfile";
import EditProfile from "../src/Components/Pages/User/EditProfile";
import Admin from "../src/Components/Pages/Admin/admin";
import AddTour from "../src/Components/Pages/Tour/AddTour";
import TourTable from "../src/Components/Pages/Tour/TourTable";
import UpdateTour from "../src/Components/Pages/Tour/UpdateTour";
import SearchTour from "../src/Components/Pages/Tour/SearchTour";
import SearchByDestination from "../src/Components/Pages/Tour/SearchByDestination";
import UserSearchTour from "../src/Components/Pages/Tour/UserSearchTour";
import UserSearchByDestination from "../src/Components/Pages/Tour/UserSearchByDestination";
import SearchByBudget from "../src/Components/Pages/Tour/SearchByBudget";
import UserSearchByBudget from "../src/Components/Pages/Tour/UserSearchByBudget";
import UserTourTable from "../src/Components/Pages/Home/UserTourTable";
import AddTourist from "../src/Components/Pages/Booking/AddTourist";
import GetBookedTours from "../src/Components/Pages/User/GetBookedTours";
import GetAllBookedTours from "../src/Components/Pages/Admin/GetAllBookedTours";
import GetFeedback from "../src/Components/Pages/Admin/GetFeedback";
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import ProductDisplay1 from './Components/ProductDisplay/ProductDisplay1';
import ProductDisplay2 from './Components/ProductDisplay/ProductDisplay2';
import ProductDisplay3 from './Components/ProductDisplay/ProductDisplay3';
import ProductDisplay4 from './Components/ProductDisplay/ProductDisplay4';
import ProductDisplay5 from './Components/ProductDisplay/ProductDisplay5';
import ProductDisplay6 from './Components/ProductDisplay/ProductDisplay6';
import ProductDisplay7 from './Components/ProductDisplay/ProductDisplay7';
import ProductDisplay8 from './Components/ProductDisplay/ProductDisplay8';
import ProductDisplay9 from './Components/ProductDisplay/ProductDisplay9';
import ProductDisplay10 from './Components/ProductDisplay/ProductDisplay10';
import ProductDisplay11 from './Components/ProductDisplay/ProductDisplay11';
import ProductDisplay12 from './Components/ProductDisplay/ProductDisplay12';
import ProductDisplay13 from './Components/ProductDisplay/ProductDisplay13';
import ProductDisplay14 from './Components/ProductDisplay/ProductDisplay14';
import ProductDisplay16 from './Components/ProductDisplay/ProductDisplay16';
import ProductDisplay17 from './Components/ProductDisplay/ProductDisplay17';
import ProductDisplay18 from './Components/ProductDisplay/ProductDisplay18';
import ProductDisplay19 from './Components/ProductDisplay/ProductDisplay19';
import ProductDisplay15 from './Components/ProductDisplay/ProductDisplay15';
import ReviewR from './Components/Reviews/ReviewR';

// import Cart from './Components/Pages/Cart';
// import Product from './Components/Pages/Product';
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  return (
    <BrowserRouter>

      <Navbar />
      {/* <NavBar /> */}
      {/* <Dashborad/> */}
      {/* <FeedbackForm/>
      <FeedbackList/> */}
      <Routes>
        <Route path='/' element={<MainPages />} />
        <Route path="/About" element={<About />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Signups" element={<Signups />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/ContactApp" element={<ContactApp />} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        {/* <Route path="/Dashborad" element={<Dashborad />} /> */}
        <Route path="/Payment" element={<Payment />} />
       

        {/* <Route path='/product/:productId'element={<Product/>}/>
         
        
         <Route path='/cart' element={<Cart/>}/>         */}

        <Route path="/Pages" element={<Homes />} />
          <Route path="/contact" element={<ContactA />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/getFeedback" element={<GetFeedback />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/userProfile" exact element={<UserProfile />} />
          <Route path="/editProfile" exact element={<EditProfile />} />
          <Route path="/userTourTable" element={<UserTourTable />} />
          <Route path="/add-tourists" element={<AddTourist />} />
          <Route path="/getBookedTours" element={<GetBookedTours />} />
          <Route path="/getByBudget" element={<UserSearchByBudget />} />
          <Route path="/gettours" element={<UserSearchTour />} />
          <Route path="/getbydestination/:destination" element={<UserSearchByDestination />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addTour" element={<AddTour />} />
          <Route path="/updateTour/:tourId" element={<UpdateTour />} />
          <Route path="/tourTable" element={<TourTable />} />
          <Route path="/search" element={<SearchTour />} />
          <Route path="/getallbookings" element={<GetAllBookedTours />} />
          <Route path="/searchbydestination/:destination" element={<SearchByDestination />} />
          <Route path="/searchByBudget" element={<SearchByBudget />} />
          <Route path="/ProductDisplay" element={<ProductDisplay />} />
          <Route path="/ProductDisplay1" element={<ProductDisplay1 />} />
          <Route path="/ProductDisplay2" element={<ProductDisplay2 />} />
          <Route path="/ProductDisplay3" element={<ProductDisplay3 />} />
          <Route path="/ProductDisplay4" element={<ProductDisplay4 />} />
          <Route path="/ProductDisplay5" element={<ProductDisplay5 />} />
          <Route path="/ProductDisplay6" element={<ProductDisplay6 />} />
          <Route path="/ProductDisplay7" element={<ProductDisplay7 />} />
          <Route path="/ProductDisplay8" element={<ProductDisplay8 />} />
          <Route path="/ProductDisplay9" element={<ProductDisplay9 />} />
          <Route path="/ProductDisplay10" element={<ProductDisplay10 />} />
          <Route path="/ProductDisplay11" element={<ProductDisplay11 />} />
          <Route path="/ProductDisplay12" element={<ProductDisplay12 />} />
          <Route path="/ProductDisplay13" element={<ProductDisplay13 />} />
          <Route path="/ProductDisplay14" element={<ProductDisplay14 />} />
          <Route path="/ProductDisplay15" element={<ProductDisplay15 />} />
          <Route path="/ProductDisplay16" element={<ProductDisplay16 />} />
          <Route path="/ProductDisplay17" element={<ProductDisplay17 />} />
          <Route path="/ProductDisplay18" element={<ProductDisplay18 />} />
          <Route path="/ProductDisplay19" element={<ProductDisplay19 />} />
          <Route path="/ReviewR" element={<ReviewR />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3001} />
    </BrowserRouter>
  );
}

export default App;
