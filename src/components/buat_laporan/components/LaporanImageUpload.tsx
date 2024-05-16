import LaporanImageUploadDetail from "@/components/buat_laporan/components/LaporanImageUploadDetail";
import ImageUpload from "@/components/image/ImageUpload";
import { AssetType, UploadAttachment } from "@/types/attachment";
import * as React from "react";

export interface LaporanImageUploadProps {}

const LaporanImageUpload: React.FC<LaporanImageUploadProps> = ({}) => {
  const [fileUploaded, setFileUploaded] = React.useState<UploadAttachment[]>(
    []
  );
  const [errorUploadFileMsg, setErrorUploadFileMsg] =
    React.useState<string>("");

  const handleChangeImage = (data: UploadAttachment) => {
    setFileUploaded((prev) => [...prev, data]);
  };

  const handleRemoveImage = (index: number) => {
    setFileUploaded((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {errorUploadFileMsg && (
        <div className="text-red-500 text-[12px] mb-1">
          {errorUploadFileMsg}
        </div>
      )}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        <ImageUpload
          assetType={AssetType.USER_REPORT_ATTACHMENT}
          onImageChange={handleChangeImage}
          onErrorUploadFile={setErrorUploadFileMsg}
        />
        {fileUploaded.map((file, index) => (
          <LaporanImageUploadDetail
            key={index}
            file={file}
            onRemove={() => handleRemoveImage(index)}
          />
        ))}
        {fileUploaded.length === 0 && (
          <img src="/icons/no_image.svg" alt="image" />
        )}
      </div>
    </>
  );
};

export default LaporanImageUpload;
