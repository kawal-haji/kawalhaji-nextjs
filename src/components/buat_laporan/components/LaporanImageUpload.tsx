import LaporanImageUploadDetail from "@/components/buat_laporan/components/LaporanImageUploadDetail";
import ImageUpload from "@/components/image/ImageUpload";
import * as React from "react";

export interface LaporanImageUploadProps {}

const LaporanImageUpload: React.FC<LaporanImageUploadProps> = ({}) => {
  const [fileUploaded, setFileUploaded] = React.useState<File[]>([]);
  const [errorUploadFileMsg, setErrorUploadFileMsg] =
    React.useState<string>("");

  const handleChangeImage = (image: File) => {
    setFileUploaded((prev) => [...prev, image]);
  };

  const handleRemoveImage = (index: number) => {
    setFileUploaded((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {errorUploadFileMsg && (
        <div className="text-red-500">{errorUploadFileMsg}</div>
      )}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {fileUploaded.map((file, index) => (
          <LaporanImageUploadDetail
            key={index}
            file={file}
            onRemove={() => handleRemoveImage(index)}
          />
        ))}
        <ImageUpload
          onImageChange={handleChangeImage}
          onErrorUploadFile={setErrorUploadFileMsg}
        />
        <img src="/icons/no_image.svg" alt="image" />
      </div>
    </>
  );
};

export default LaporanImageUpload;
