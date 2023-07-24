import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Entertainment",
    "Cricket",
    "Movies",
    "Technical",
    "Music",
    "Bhakti",
    "Comedy",
    "Programming",
    "Bollywood",
    "Nasa",
    "Recents",
  ];
  return (
    <>
      
      
      <div className="flex w-4/5 lg:w-[calc(100%-3%)] bg-white fixed top-14  mx-2 z-20 px-3  py-1 md:py-2 lg:py-3 truncate line-clamp-1  text-sm lg:text-base">
        {list.map((item, index) => {
          return (
              <Button key={index} name={item}></Button>
            
          );
        })}
      </div>
      
      
    </>
  );
};
export default ButtonList;
