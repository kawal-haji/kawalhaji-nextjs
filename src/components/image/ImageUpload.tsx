import { useUploadFileURL } from "@/hooks/asset/useUploadFileURL";
import { AssetType, UploadAttachment } from "@/types/attachment";
import Compressor from "compressorjs";
import * as React from "react";
import { useDropzone } from "react-dropzone";

export interface ImageUploadProps {
  assetType: AssetType;
  onImageChange: (data: UploadAttachment) => void;
  onErrorUploadFile: (error: string) => void;
}

const accept = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
};

const maxSize = 20_000_000; // 2MB

const ImageUpload = React.forwardRef<React.Reference, ImageUploadProps>(
  (props, _reference) => {
    const { onImageChange, onErrorUploadFile, assetType } = props;
    const { mutate: uploadFile, isPending: isUploading } = useUploadFileURL();

    const handleUploadFile = async (file: File) => {
      await uploadFile(
        { assetType, fileName: file.name, file },
        {
          onSuccess: (data) => {
            if (data) {
              onImageChange(data);
            }
          },
          onError: (error) => {
            onErrorUploadFile("Gagal mengunggah file");
          },
        }
      );
    };

    const handleChangeImage = (newImage: File) => {
      try {
        new Compressor(newImage, {
          quality: 0.8,
          convertSize: 5_000_000,
          maxHeight: 800,
          convertTypes: ["image/jpeg", "image/png", "image/jpg"],
          success: (resultBlob) => {
            const newName = newImage.name.replace(/\.[^/.]+$/, "");
            const randomName = Math.random().toString(36).substring(7);

            const compressedImage = new File(
              [resultBlob],
              `${newName}_${randomName}`,
              {
                type: newImage.type,
                lastModified: Date.now(),
              }
            );

            handleUploadFile(compressedImage);
          },
        });
      } catch (error) {
        console.error(error);
      }
    };

    const { getInputProps, getRootProps, fileRejections } = useDropzone({
      accept,
      multiple: false,
      maxSize,
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
          const file = acceptedFiles[0];
          handleChangeImage(file);
        }
      },
    });

    if (fileRejections.length > 0) {
      const { errors } = fileRejections[0];
      const error = errors[0].message;
      onErrorUploadFile(error);
    }

    return (
      <div className="relative">
        {isUploading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg bg-neutral"></span>
          </div>
        )}
        <div {...getRootProps()} onClick={(e) => e.stopPropagation()}>
          <input {...getInputProps()} />
          <img src="/icons/add_photo_video.svg" alt="image" />
        </div>
      </div>
    );
  }
);

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
