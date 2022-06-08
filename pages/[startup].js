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

    return {
        props: {
            sname: context.params.startup,
            
        }
    }

}

export default function Home(props) {
    return (
        <div>
            <div>{props.sname}</div>
        </div>
    )
}