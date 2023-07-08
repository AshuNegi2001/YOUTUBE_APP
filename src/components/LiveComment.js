const LiveComment = ({name, message}) =>{
    
    return (
    <>
    <div className ="flex  px-2 py-1">
    <img className = "rounded-full w-8 mr-2" src="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <div className = "font-bold mr-3">{name}</div>
        <div className = "">{message}</div>
    </div>
    
    </>
    )
}

export default LiveComment;