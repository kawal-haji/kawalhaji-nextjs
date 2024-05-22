import * as React from "react";

import { Attachment, FileTypeEmum } from "@/types/attachment";

export interface ImagePreviewProps {
  attachment: Attachment;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ attachment }) => {
  const imageModal = React.useRef<HTMLDialogElement>(null);
  const videoModal = React.useRef<HTMLDialogElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleCloseVideoModal = () => {
    videoModal.current?.close();
    videoRef.current?.pause();
  };

  return (
    <>
      {attachment.fileType.id === FileTypeEmum.IMAGE ? (
        <img
          src={attachment.file.url}
          alt="like"
          className="w-full rounded-md object-cover"
          onClick={() => imageModal.current?.showModal()}
        />
      ) : (
        <div
          className="relative rounded-md"
          onClick={() => videoModal.current?.showModal()}
        >
          <video className="w-full rounded-md object-cover" controls>
            <source src={attachment.file.url} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center  rounded-md">
            <img src="/icons/play.svg" alt="Play" />
          </div>
        </div>
      )}
      <dialog ref={imageModal} className="modal">
        <div
          className="modal-backdrop"
          onClick={() => imageModal.current?.close()}
        >
          <button>close</button>
        </div>
        <div className="modal-box p-0">
          <img
            src={attachment.file.url}
            alt="like"
            className="w-full rounded-md object-cover"
          />
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => imageModal.current?.close()}
          >
            ✕
          </button>
        </div>
      </dialog>
      <dialog ref={videoModal} className="modal">
        <div className="modal-backdrop" onClick={handleCloseVideoModal}>
          <button>close</button>
        </div>
        <div className="modal-box p-0">
          <video
            ref={videoRef}
            className="w-full rounded-md object-cover"
            controls
          >
            <source src={attachment.file.url} type="video/mp4" />
          </video>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleCloseVideoModal}
          >
            ✕
          </button>
        </div>
      </dialog>
    </>
  );
};

export default ImagePreview;
