import comp from "../data/all_companies.json";
import Card from "../components/Card";
import styles from "../styles/main.module.css";


export async function getStaticProps() {
    return {
      props: { comp,
      },
    };
  }
  
export default function Home({comp}) {
  return (
        <ul>
      {comp.map(company => (
           <li><Card {...company}/></li>
      ))}
      </ul>
  
  );
}

// export default function Home({ allCompanies }) {
// //   {
// //     allCompanies.map((company) => <Card {...company} />);
// //   }
// }
