import BookForm from "@/app/components/bookForm";
import Show from "@/app/components/show"

const UserDetail = async ({ params }: { params: { id: string } }) => {
    // paramsで取得したidで本の個別データを取得する
    const id = params.id
    const parameter = `http://localhost:3000/api/user/${id}`
    const postParameter = `http://localhost:3000/api/book`
    const method = "POST"
    const res = await fetch(parameter, {
        cache: "no-store"
    });
    const data = await res.json();
    // console.log(data.user)
    return(
        <>
            <Show Data={data} />
            <BookForm Object={{
                urlparameter : postParameter,
                httpMethod : method
            }}/>
        </>
    )
}

export default UserDetail