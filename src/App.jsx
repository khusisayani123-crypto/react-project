import React from 'react'
import Card from './components/Card.jsx'

const App = () => 
{

    const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeX6ku69_92RMDzmUn_e0swxsNonUDN2JaTZ_XamgOw&s=10",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Senior Level",
    tag2: "Full Time",
    pay: "$65/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/1280px-Spotify_App_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Spotify",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Junior Level",
    tag2: "Full Time",
    pay: "$35/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Mid Level",
    tag2: "Full Time",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f0U6HVw6nPZh0FFt2_rtoIViUA-1J1cvgMkeqWhwJkWbrZSzrpQgCk4&s=10",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Senior Level",
    tag2: "Part Time",
    pay: "$60/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    name: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Mid Level",
    tag2: "Full Time",
    pay: "$55/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66gFtlGbndqAD0cS35cGt61fuqemjTScZirDe48ftHQ&s",
    name: "Airbnb",
    datePosted: "2 weeks ago",
    post: "Visual Designer",
    tag1: "Junior Level",
    tag2: "Part Time",
    pay: "$30/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    name: "Uber",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Mid Level",
    tag2: "Full Time",
    pay: "$40/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRcN38lCDcvWWfbPwpSSnCzEvQlBu6mgALa4jck3EYA&s=10",
    name: "Adobe",
    datePosted: "4 weeks ago",
    post: "Graphic Designer",
    tag1: "Senior Level",
    tag2: "Part Time",
    pay: "$45/hour",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85/hub/file/carousel/img/b8d00b2e389e3a38f115ea00f7dc3dff3ef4f337/dbc32aa496f21ffa8508a4f6432d1e6c6f76e3b1",
    name: "Figma",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Junior Level",
    tag2: "Full Time",
    pay: "$38/hour",
    location: "Ahmedabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiD9IodEq2mlphCGkjjSZElrH6O5jHY2vahrD3bq2cJg&s=10",
    name: "Salesforce",
    datePosted: "8 weeks ago",
    post: "Product Manager",
    tag1: "Senior Level",
    tag2: "Full Time",
    pay: "$70/hour",
    location: "Mumbai, India"
  }
  ];

  return (
    <div className='parent'>
        {jobOpenings.map(function(elem,idx){
            
            return <div key={idx}>
              <Card  name={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} />
            </div>

        })}
    </div>
  )
}

export default App
