async function SingleFileUploader({
  formDataName,
  localUri,
  filetype,
  filename,
  distantUrl,
}) {
  return new Promise(async function (resolve, reject) {
    const data = new FormData();
    data.append(formDataName, {
      uri: localUri,
      type: filetype,
      name: filename,
    });
    let serverResponse;
    serverResponse = await fetch(distantUrl, {
      method: "POST",
      body: data,
    });
    if (serverResponse.status === 201) {
      resolve();
    } else {
      reject();
    }
  });
}

module.exports = SingleFileUploader;
