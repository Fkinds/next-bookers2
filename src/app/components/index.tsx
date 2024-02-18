import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async () => {
    const res = await fetch(`http://localhost:3000/api/book`)
    const repo = await res.json();
    console.log(repo);
    return <h1>aaaaa</h1>
    // return { props: { repo } }
}

// export default function Index({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//     return (
//         // { repo.map }
//     )
// }