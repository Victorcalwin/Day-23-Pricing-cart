import React from "react";
import './App.css';

import Pricing from './pricing';

function App() {
  const pricing = [
    {
      name: "FREE",
      price: "0",
      currency: "$",
      pricePer: "month",
      user: "Single User",
      isUser: true,
      storage: "5GB stroage",
      isStorage: true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess: true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:false,
      phone: "Dedicated Phone Support",
      isPhone:false,
      subdomain: "Free Sub Domains",
      isSubdomain: false,
      reports:"Monthly Status Reports",
      isReports: false


    },
    {
      name: "PLUS",
      price: "9",
      currency: "$",
      pricePer: "month",
      user: "5 User",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess: true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:false,
      phone: "Dedicated Phone Support",
      isPhone:false,
      subdomain: "Free Sub Domains",
      isSubdomain: false,
      reports:"Monthly Status Reports",
      isReports: false
    },
    {
      name: "PRO",
      price: "49",
      currency: "$",
      pricePer: "month",
      user: "Unlimited Users",
      isUser: true,
      storage: "150GB Storage",
      isStorage: true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess: true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:false,
      phone: "Dedicated Phone Support",
      isPhone:false,
      subdomain: "Free Sub Domains",
      isSubdomain: false,
      reports:"Monthly Status Reports",
      isReports: false
    }
    
    
  ]

  return (
    <section className="pricing py-5">
       <div className="container">
       <div className="row">
          {pricing.map(price => <Pricing {...price}/>)}
    </div>
  </div>
</section>
  );
}


export default App;
