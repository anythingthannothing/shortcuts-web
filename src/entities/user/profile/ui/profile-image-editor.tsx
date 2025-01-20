import { useImageEditor } from '@/entities/user/profile/model/use-image-editor';
import ImageCropper from '@/shared/components/form/image-cropper';
import { Button } from '@/shared/components/ui/button';
import { ProfileImage } from '@/entities/user/profile/ui/profile-image';

interface Props {
  profileInfo: any;
}

const ProfileImageEditor = ({ profileInfo }: Props) => {
  const {
    selectedFile,
    isImageSelected,
    handleSave,
    handleCancel,
    handleFileSelect,
  } = useImageEditor();

  return (
    <div className="flex flex-col gap-4">
      <ProfileImage src={profileInfo.thumbnailUrl} />
      <Button
        type="button"
        onClick={() => {
          document?.getElementById('fileInput')?.click();
        }}
      >
        Update Profile Image
      </Button>
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
