import Allcards from '../components/AllCards';
import comp from "../data/all_companies.json";

export async function getStaticProps() {
    return {
      props: { comp,
      },
    };
  }

const DummyHead =({comp})=>{
return(
<Allcards comp={comp}/>
)
}

export default DummyHead;   