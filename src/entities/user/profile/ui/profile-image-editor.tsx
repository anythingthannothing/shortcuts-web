import { ChangeEvent, useState } from 'react';
import { Area } from 'react-easy-crop';

import ImageCropper from '@/shared/components/form/image-cropper';
import { Button } from '@/shared/components/ui/button';

interface Props {
  profileInfo: any;
}

const ProfileImageEditor = ({ profileInfo }: Props) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [updatedImage, setUpdatedImage] = useState<Blob | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setIsImageSelected(true);
    }
  };

  const handleSave = async (croppedArea: Area) => {
    if (selectedFile) {
      const croppedImage = await getCroppedImage(selectedFile, croppedArea);
      setUpdatedImage(croppedImage);
    }
  };

  const handleCancel = () => {
    if (selectedFile) {
      URL.revokeObjectURL(selectedFile);
    }
    setSelectedFile(null);
    setIsImageSelected(false);
  };

  return (
    <div className="flex gap-4">
      {profileInfo.thumbnailUrl ? (
        <img
          src={profileInfo.thumbnailUrl}
          alt="user's profile image"
          width={200}
          height={200}
          className="rounded-full"
        />
      ) : (
        <Button
          type="button"
          onClick={() => document?.getElementById('fileInput')?.click()}
        >
          Update Profile Image
        </Button>
      )}
      {updatedImage && (
        <img src={URL.createObjectURL(updatedImage)} width={200} />
      )}
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />
      {isImageSelected ? (
        <ImageCropper
          src={selectedFile!}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      ) : null}
    </div>
  );
};

export default ProfileImageEditor;

async function getCroppedImage(
  imageSrc: string,
  croppedAreaPixels: Area,
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');
  img.src = imageSrc;

  return new Promise((resolve) => {
    img.onload = () => {
      const ctx = canvas.getContext('2d');
      const { width, height, x, y } = croppedAreaPixels;

      canvas.width = width;
      canvas.height = height;

      ctx?.drawImage(img, x, y, width, height, 0, 0, width, height);

      canvas.toBlob((blob) => resolve(blob!), 'image/webp');
    };
  });
}
