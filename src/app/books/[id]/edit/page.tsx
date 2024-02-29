import BookForm from "@/app/components/bookForm"

const BookEdit = ({ params }: { params: { id : number }}) => {
    const id = params.id
    const parameter = `http://localhost:3000/api/book/${id}`
    const method = "PATCH"
    return (
        <>
            <BookForm Object={{
                urlparameter : parameter,
                httpMethod : method
            }} />
        </>
    )
}

export default BookEdit
