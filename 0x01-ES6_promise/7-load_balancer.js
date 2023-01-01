export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((body) => body)
    .catch((err) => console.log(err));
}
