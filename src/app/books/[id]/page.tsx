import BookForm from "@/app/components/bookForm";
import Show from "@/app/components/show"

const BookDetail = async({ params }: { params: { id: number } }) => {
    // paramsで取得したidで本の個別データを取得する
    const id = params.id 
    const parameter = `http://localhost:3000/api/book/${id}`
    const method = "GET"
    const res = await fetch(parameter,{
        cache: "no-store"
    });
    const data = await res.json();
    // console.log(data)
    return (
        <>
            <Show Data={data} />
            <BookForm urlparameter={parameter} httpMethod={method}/>
        </>
    )
}

export default BookDetail
