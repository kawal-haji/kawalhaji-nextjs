import { UploadAttachment } from "@/types/attachment";
import * as React from "react";

export interface LaporanImageUploadDetailProps {
  file: UploadAttachment;
  onRemove: () => void;
}

const LaporanImageUploadDetail: React.FC<LaporanImageUploadDetailProps> = ({
  file,
  onRemove,
}) => {
  return (
    <div className="relative">
      <img
        src="/icons/x.svg"
        alt="close"
        className="absolute top-1 right-1 bg-white rounded-full border border-gray-200 p-1 w-[20px] h-[20px]"
        onClick={onRemove}
      />
      {file.file ? (
        <>
          {file.isImage ? (
            <img
              src={URL.createObjectURL(file.file)}
              alt="image"
              className="w-full object-cover rounded-md"
            />
          ) : (
            <video className="w-full object-cover rounded-md" controls>
              <source src={URL.createObjectURL(file.file)} />
            </video>
          )}
        </>
      ) : (
        <img
          src="/icons/no_image.svg"
          alt="image"
          className="w-full object-cover rounded-md"
        />
      )}
    </div>
  );
};

export default LaporanImageUploadDetail;
