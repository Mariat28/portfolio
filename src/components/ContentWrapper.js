const ContentWrapper = ({children}) =>{
    return(
        <div className=" overflow-y-auto overflow-x-hidden h-screen w-screen " id="style-1">
            <div className=" flex flex-col  ">{children}</div>
            
        </div>
    )
}
export default ContentWrapper;