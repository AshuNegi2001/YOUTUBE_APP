const FilterCard = ({ info }) => {
  // console.log(info);
  const {
    snippet: { channelTitle, description, thumbnails, title },
  } = info;
  return (
    <>
      <div className="w-full h-52">
        <div className="flex w-3/4 cursor-pointer mx-auto my-1">
          <div className=" w-1/3 p-2">
            <img
              className="rounded-xl h-48 w-72"
              src={thumbnails.medium.url}
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col w-2/3 p-2 ml-1">
            <div className="font-semibold text-lg line-clamp-2 py-1 ">
              {title}
            </div>
            <div className="text-sm">.211k views</div>
            <div className="flex py-2">
              <div>
                <img
                  className="w-5 mr-2 rounded-full"
                  src="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj"
                  alt="channel-image"
                />
              </div>
              <div className="text-sm">{channelTitle}</div>
            </div>
            <div className="line-clamp-1 text-sm">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
