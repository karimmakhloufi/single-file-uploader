interface SingleUploaderConfig {
  formDataName: String;
  localUri: String;
  filetype: String;
  filename: String;
  distantUrl: String;
  token: String;
}
declare function SingleFileUploader(
  config: SingleUploaderConfig
): Promise<boolean>;
export = SingleFileUploader;
