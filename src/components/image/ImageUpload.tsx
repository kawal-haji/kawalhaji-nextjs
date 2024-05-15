import Compressor from "compressorjs";
import * as React from "react";
import { useDropzone } from "react-dropzone";

export interface ImageUploadProps {
  onImageChange: (image: File) => void;
  onErrorUploadFile: (error: string) => void;
}

const accept = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
};

const maxSize = 20_000_000; // 2MB

const ImageUpload = React.forwardRef<React.Reference, ImageUploadProps>(
  (props, _reference) => {
    const { onImageChange, onErrorUploadFile } = props;

    const handleChangeImage = (newImage: File) => {
      try {
        new Compressor(newImage, {
          quality: 0.8,
          convertSize: 5_000_000,
          maxHeight: 800,
          convertTypes: ["image/jpeg", "image/png", "image/jpg"],
          success: (resultBlob) => {
            const compressedImage = new File([resultBlob], newImage.name, {
              type: newImage.type,
              lastModified: Date.now(),
            });

            onImageChange(compressedImage);
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
      <div>
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
