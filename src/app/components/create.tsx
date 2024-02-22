import { useForm, SubmitHandler } from "react-hook-form" 

export const Create = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit: SubmitHandler
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>Title</label>
            <input {...register("title")}/>
            <label>Body</label>
            <input {...register("body")}/>
            <input type="submit"/>
        </form>
    )
}
