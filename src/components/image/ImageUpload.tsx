import { useUploadFileURL } from "@/hooks/asset/useUploadFileURL";
import { CAN_UPLOAD_VIDEO } from "@/lib/constants";
import { AssetType, UploadAttachment } from "@/types/attachment";
import Compressor from "compressorjs";
import * as React from "react";
import { useDropzone } from "react-dropzone";

export interface ImageUploadProps {
  assetType: AssetType;
  onImageChange: (data: UploadAttachment) => void;
  onErrorUploadFile: (error: string) => void;
}

const acceptImageAndVideo = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "video/mp4": [".mp4"],
};

const acceptImageOnly = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
};

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
              data.isImage = file.type.includes("image");
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
            const ext = newImage.name.split(".").pop();

            const compressedImage = new File(
              [resultBlob],
              `${newName}_${randomName}.${ext}`,
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
      accept: CAN_UPLOAD_VIDEO ? acceptImageAndVideo : acceptImageOnly,
      multiple: false,
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
          const file = acceptedFiles[0];

          if (file.type.includes("image")) {
            handleChangeImage(file);
          } else {
            handleUploadFile(file);
          }
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
