export default async function Page({ params }) {
    const { slug } = await params;

    // This is used for throw the error
    //  throw new Error("error hai")

    let languages = ["python", "javascript", "java", "cpp", "cs"];

    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>;
    }

    return <div>Post not found</div>;
}