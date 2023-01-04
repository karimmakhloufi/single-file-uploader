interface SingleUploaderConfig {
  formDataName: String;
  localUri: String;
  filetype: String;
  filename: String;
  distantUrl: String;
  token: String;
  expectedStatusCode: number;
}
declare function SingleFileUploader(
  config: SingleUploaderConfig
): Promise<boolean>;
export = SingleFileUploader;
