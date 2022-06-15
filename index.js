const nftName = "Pickax for UglyToTo";
const description = "Do you want to have Ugly Potato?";
const hiddenImgUrl = "ipfs://QmexBkBaBFa7k5D2uxFEMZ7MyCnaDvLUUKKqX14jqikndb";
const totalNum = 82;

try {
  for (let i = 1; i <= totalNum; i++) {
    let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
    let fs = require("fs");
    fs.writeFile(`json/${i}.json`, json, "utf8", (e) => e);
  }
  console.log("complete!");
} catch (error) {
  console.log(error);
}
