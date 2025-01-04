import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Area } from 'react-easy-crop';

import { getImageUploadPresignedUrlApi } from '@/entities/user/profile/api/get-image-upload-presigned-url-api';

export const useImageEditor = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [updatedImage, setUpdatedImage] = useState<Blob | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (selectedFile) {
        URL.revokeObjectURL(selectedFile);
      }
      setSelectedFile(URL.createObjectURL(file));
      setIsImageSelected(true);
    }
  };

  const handleSave = async (croppedArea: Area) => {
    if (selectedFile) {
      const croppedImage = await getCroppedImage(selectedFile, croppedArea);
      setUpdatedImage(croppedImage);

      const formData = new FormData();
      const { url, fields } = await getImageUploadPresignedUrlApi();
      Object.entries(fields).forEach(([field, value]) => {
        formData.append(field, value);
      });
      formData.append('Content-Type', 'image/webp');
      formData.append('file', croppedImage);
      await axios.post(url, formData, { withCredentials: false });
    }
  };

  const handleCancel = () => {
    if (selectedFile) {
      URL.revokeObjectURL(selectedFile);
    }
    setSelectedFile(null);
    setIsImageSelected(false);
  };

  return {
    selectedFile,
    isImageSelected,
    updatedImage,
    handleSave,
    handleCancel,
    handleFileSelect,
  };
};

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

      canvas.toBlob((blob) => resolve(blob!), 'image/webp', 0.9);
    };
  });
}
