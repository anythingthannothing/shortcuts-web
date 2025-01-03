'use client';

import './image-cropper.scss';

import React, { useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';

import ConfirmModal from '@/shared/components/modal/confirm-modal';
import { Button } from '@/shared/components/ui/button';
import { useModal } from '@/shared/plugins/modal/use-modal';

interface Props {
  src: string;
  handleSave: (croppedArea: Area) => void;
  handleCancel: any;
}

export default function ImageCropper({ src, handleSave, handleCancel }: Props) {
  const modal = useModal();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);

  const onCropChange = (crop: Point) => {
    setCrop(crop);
  };

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onZoomChange = (zoom: number) => {
    setZoom(zoom);
  };

  return (
    <div className="image-cropper">
      <div className="crop-container">
        <Cropper
          image={src}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          onCropChange={onCropChange}
          onCropComplete={onCropComplete}
          onZoomChange={onZoomChange}
        />
      </div>
      <div className="controls">
        <Button
          type={'button'}
          disabled={!croppedArea}
          onClick={async () => {
            const confirm = await modal.push('confirm-image', ConfirmModal, {
              title: 'Would you like to proceed with this image?',
            });

            if (confirm && croppedArea) {
              handleSave(croppedArea);
              handleCancel();
            }
          }}
        >
          Save
        </Button>
        <Button type={'button'} variant={'destructive'} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
