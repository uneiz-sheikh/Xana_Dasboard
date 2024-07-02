
import "./style.scss";
import Header from "@/component/layout/header";
import Sidebar from "@/component/layout/sidebar";
import Dashboard from "@/templates/dashboard";

export default function Home() {

  return (
    <>
      <Header/>
      <Sidebar/>
      <div className="dasboard_sec">
        
        
          
            <Dashboard/>    
        
      </div>
   
    </>
  );
}
