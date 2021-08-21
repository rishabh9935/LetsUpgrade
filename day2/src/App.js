import './App.css';
import Card from './Card';

function App() {

  const details = [
    {
        title:"Web Develeopment",
        subtitle:"Zero to Hero",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img:"https://www.axiomcreation.com/wp-content/uploads/2018/03/website-development.jpg",
    },
    {
        title:"App Development",
        subtitle:"Zero to Hero",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img:"https://www.webcompletesolutions.com/assets/img/services-details/Mobile%20App%20Development.png",
    },
    {
      title:"Block Chain",
      subtitle:"Zero to Hero",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img:"https://www.coxblue.com/wp-content/uploads/2019/01/What-is-Blockchain-The-Most-Disruptive-Tech-in-Decades-1280x720.jpg",
  },
  {
      title:"Artificial Intelligence",
      subtitle:"Zero to Hero",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img:"https://www.softwareone.com/-/media/global/social-media-and-blog/hero/implementing-artificial-intelligence-part-1-hero.jpg?rev=56ebf75efd06466786861433a1cae008&sc_lang=en&hash=FAEFF0A8026F9DFC85CEFC8B6355E9D4",
  },
  {
    title:"Data Science",
    subtitle:"Zero to Hero",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    img:"https://www.sharda.ac.in/blog/wp-content/uploads/2020/04/Data-Science-1.jpg",
}
];
  return (
    <div className="App">
    <div className = "container">
      {
        details.map((data, index) =>(
          <Card key = {index} title = {data.title} subtitle={data.subtitle} description= {data.desc} img = {data.img} />
        ))

      } 
    </div>
    </div>
  );
}

export default App;
