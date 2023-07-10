const RelatedVideoCard = () => {
  return (
    <>
      <div className = "flex mb-2">
        <div className = "border w-[170px]"><img className = "rounded-lg" src="https://i.ytimg.com/an_webp/gYu2dEju6bI/mqdefault_6s.webp?du=3000&sqp=COD3sKUG&rs=AOn4CLCTtDUrE34fE5QshlLhnpTydrbAag" alt="" /></div>
        <div className = "border w-[205px] px-2">
            <div className = "line-clamp-2 text-sm font-medium mb-1">Sandeep Bhaiya | New Web Series | EP 01 | Mulyankan</div>
            <div className = "text-sm text-gray-500">The Viral Fever</div>
            <div className = "flex text-xs text-gray-500 my-[2px]">
            <div className = "mr-2 ">10M views</div>
            <div>•10days ago</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default RelatedVideoCard;
