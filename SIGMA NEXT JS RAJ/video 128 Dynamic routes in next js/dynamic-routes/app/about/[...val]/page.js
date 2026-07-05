export default async function Page({ params }) {
    const p = await params;

    console.log(p); // { slug: 'cs' }

    return <div>I am about page check console</div>;
}