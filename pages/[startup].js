import comp from '../data/all_companies.json';
import Link from "next/link";
export async function getStaticPaths() {

    const paths = comp.Sheet1.map(sp => {

        return {
            params: {
                startup: sp.Name,
            }
        }

    })
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps(context) {
    const getPathProps = comp.Sheet1.filter(
        (sp) => sp.Name  === context.params.startup,
      );
      if (getPathProps.length > 0) {
        return {
          props: {
            sp: getPathProps[0]
          },
        };
      }
}

export default function Home(props) {
    return (
        <div>
            <div>{props.sp.Name}</div>
            <div>{props.sp.Sector}</div>
        </div>
    )
}