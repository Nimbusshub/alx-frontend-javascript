export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload])
    .then((body) => {
      return body;
    })
    .catch((err) => console.log(err));
}
