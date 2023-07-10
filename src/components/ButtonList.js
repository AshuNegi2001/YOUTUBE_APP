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
    "Recently updated",
  ];
  return (
    <>
      <div className="flex sticky top-16 mx-2 z-20 bg-white px-3 pb-3">
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
