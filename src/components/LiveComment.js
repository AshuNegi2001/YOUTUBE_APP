const LiveComment = ({name, message}) =>{
    
    return (
    <>
    <div className ="flex  px-2 py-1">
    <img className = "rounded-full w-8 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLofYcMFJ_UMGFVkCYeQMtcJjJE8E51M_1D4Z-gHDiNchrISGSqpj8XikDYV_VfTm0pJA&usqp=CAU" alt="" />
        <div className = "font-bold mr-3">{name}</div>
        <div className = "">{message}</div>
    </div>
    
    </>
    )
}

export default LiveComment;