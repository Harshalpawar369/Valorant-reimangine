const ImageKit = require("imagekit");

let imageKit;

function getImageKit() {
  if (imageKit) {
    return imageKit;
  }

  const publicKey = process.env.IMAGE_KIT_PUBLIC;
  const privateKey = process.env.IMAGE_KIT_PRIVATE;
  const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

  if (!publicKey || !privateKey || !urlEndpoint) {
    throw new Error("ImageKit env vars are missing");
  }

  imageKit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });

  return imageKit;
}

async function uploadFile(file, fileName) {
  const result = await getImageKit().upload({
    file: file,
    fileName: fileName,
    folder: "valorant-wallpapper",
    useUniqueFileName: true,
  });

  return result;
}

module.exports = {
  uploadFile,
};
