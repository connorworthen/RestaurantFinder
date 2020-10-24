const image = document.getElementById("image");
const url = "http://localhost:3000/restaurants";

// Converts any given blob into a base64 encoded string.
function convertBlobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

async function fetchImageAndDisplay() {
  try {
    const fetchResult = await fetch("url");

    image.src = await convertBlobToBase64(await fetchResult.blob());
  } catch (error) {
    console.error(error);
  }
}

fetchImageAndDisplay();
