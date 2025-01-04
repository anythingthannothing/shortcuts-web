import { useImageEditor } from '@/entities/user/profile/model/use-image-editor';
import ImageCropper from '@/shared/components/form/image-cropper';
import { Button } from '@/shared/components/ui/button';

interface Props {
  profileInfo: any;
}

const ProfileImageEditor = ({ profileInfo }: Props) => {
  const {
    selectedFile,
    isImageSelected,
    updatedImage,
    handleSave,
    handleCancel,
    handleFileSelect,
  } = useImageEditor();

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
          onClick={() => {
            document?.getElementById('fileInput')?.click();
          }}
        >
          Update Profile Image
        </Button>
      )}
      {updatedImage && (
        <img
          src={URL.createObjectURL(updatedImage)}
          width={200}
          className={'rounded-full'}
        />
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
