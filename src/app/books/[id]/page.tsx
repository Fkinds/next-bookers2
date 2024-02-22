import Show from "@/app/components/show"

const BookDetail = async({ params }: { params: { id: number } }) => {
    // paramsで取得したidで本の個別データを取得する
    const id = params.id 
    const urlparameter = `http://localhost:3000/api/book/${id}`
    const res = await fetch(urlparameter,{
        cache: "no-store"
    });
    const data = await res.json();
    // console.log(data)
    return (
        <Show Data={data} />
    )
}

export default BookDetail
