import BookForm from "@/app/components/bookForm"

const BookEdit = async({ params }: { params: { id : number }}) => {
    const id = params.id
    const parameter = `http://localhost:3000/api/book/${id}`
    const method = "PATCH"
    const res = await fetch(parameter,{
        cache: "no-store"
    });
    const data = await res.json()
    return (
        <>
            <BookForm Object={{
                urlparameter : parameter,
                httpMethod : method,
                body : data.book.body,
                title : data.book.title
            }} />
        </>
    )
}

export default BookEdit
