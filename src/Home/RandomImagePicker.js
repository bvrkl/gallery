import collection from "../images/collectionArray";

const RandomImagePicker = () => {
  const homeArr = [];
  for (let i = homeArr.length; homeArr.length < 9; ) {
    const randInt1 = Math.floor(Math.random() * collection.length);
    const randInt2 = Math.floor(Math.random() * collection[randInt1].length);

    if (homeArr.includes(collection[randInt1][randInt2])) {
    } else {
      homeArr.push(collection[randInt1][randInt2]);
    }
  }
  console.log(homeArr);
  return homeArr.map((x, index) => (
    <div className="grid-item" id={`id${index + 1}`} key={index}>
      <a href={x.src}>
        <img src={x.src} alt="image" />
      </a>
      <p>{x.id}</p>
    </div>
  ));
};

export default RandomImagePicker;
