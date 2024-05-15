import { useForm } from "react-hook-form"

function Contact() {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div>
      <h1 className='text-center text-violet-700 font-bold text-2xl my-5'>Contact Form</h1>
      {console.log(errors)}
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto'>
        <div>
          <label className='w-full text-white' htmlFor="name">Name</label>
          <input className='w-full border rounded-sm bg-slate-800 p-2'
            placeholder='Enter Your Name...'
            {...register("name", { required: "Name is Required", minLength: 5 })} />
          {errors.name && <p className="text-red-700">{errors?.name?.message}</p>}
        </div>
        <div className='my-2'>
          <label className='w-full text-white' htmlFor="email">Email</label>
          <input className='w-full border rounded-sm bg-slate-800 p-2'
            placeholder='Enter Your email...'
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })} />

          {errors.email && <p className="text-red-700">{errors?.email?.message}</p>}
        </div>
        <button className='bg-red-500 rounded-sm px-5 py-3 mt-5' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact