import Show from "@/app/components/show"

const UserDetail = async ({ params }: { params: { id: string } }) => {
    // paramsで取得したidで本の個別データを取得する
    const id = params.id
    const urlparameter = `http://localhost:3000/api/user/${id}`
    const res = await fetch(urlparameter, {
        cache: "no-store"
    });
    const data = await res.json();
    // console.log(data.user)
    return (
        <Show Data={data} />
    )
}

export default UserDetail