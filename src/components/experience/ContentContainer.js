import womanImg from '../../assets/woman.png'
const ContentContainer = () =>{
    return(
        <div className="mx-6 h-screen ">
            <div className=" border border-red-500 h-full grid grid-cols-2">
                <div className=' h-full '>
                    <img src={womanImg} alt='woman' className=''/>
                </div>
                <div className=''>
                    <div className='font-semibold text-4xl text-slate-400 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500  border-2 border-red-500 p-2'>
                        Career Journey
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContentContainer;