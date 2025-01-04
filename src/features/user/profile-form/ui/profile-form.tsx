import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ImCheckboxChecked } from 'react-icons/im';
import { MdCancel } from 'react-icons/md';

import ProfileImageEditor from '@/entities/user/profile/ui/profile-image-editor';
import { jobs } from '@/features/user/profile-form/model/jobs.const';
import {
  UpdateProfileFormSchema,
  UpdateProfileFormValues,
} from '@/features/user/profile-form/model/update-profile-form-schema';
import { useUpdateProfile } from '@/features/user/profile-form/model/use-update-profile';
import { Form, FormControl, FormField } from '@/shared/components/form/form';
import { Input } from '@/shared/components/form/input';
import { Label } from '@/shared/components/form/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/form/select';
import { Switch } from '@/shared/components/form/switch';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/hooks/use-toast';

interface Props {
  profileInfo: any;
  handleClick: () => void;
}

function ProfileForm({ profileInfo, handleClick }: Props) {
  const { toast } = useToast();
  const { mutate, isPending } = useUpdateProfile();
  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(UpdateProfileFormSchema),
    defaultValues: {
      nickname: profileInfo.nickname,
      job: profileInfo.job,
      thumbnailUrl: null,
      prefersMac: profileInfo.prefersMac,
    },
  });

  const { control, register } = form;

  const onSubmit = (values: UpdateProfileFormValues) => {
    mutate(values, {
      onSuccess: () => {
        handleClick();
        toast({
          title: 'Success',
          description: 'Successfully updated profile!',
        });
      },
    });
  };

  return (
    <>
      <div className={'flex justify-between items-center gap-4 mb-6'}>
        <h2 className={'text-2xl'}>Edit Profile</h2>
        <div className={'flex gap-4'}>
          <Button type={'button'} variant={'outline'} onClick={handleClick}>
            <MdCancel className={'text-2xl text-red-600'} />
          </Button>
          <Button
            type={'button'}
            variant={'outline'}
            onClick={form.handleSubmit(onSubmit)}
            disabled={isPending}
          >
            <ImCheckboxChecked className={'text-xl text-green-500'} />
          </Button>
        </div>
      </div>
      <Form {...form}>
        <form className={'space-y-4'}>
          <div className={'flex gap-4'}>
            <p className="w-1/4 font-medium py-1 text-gray-600 text-lg">
              Profile Image
            </p>
            <ProfileImageEditor profileInfo={profileInfo} />
          </div>
          <div className="flex gap-4 items-center">
            <Label className="w-1/4 font-medium text-gray-600">Email</Label>
            <Input
              className="w-3/4 border border-gray-300 p-2 rounded"
              value={profileInfo.email}
              type="email"
              disabled
            />
          </div>
          <div className="flex gap-4 items-center">
            <Label className="w-1/4 font-medium text-gray-600">Nickname</Label>
            <Input
              maxLength={20}
              className="w-3/4 border border-gray-300 p-2 rounded"
              {...register('nickname')}
              type="text"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Label className="w-1/4 font-medium text-gray-600">Job</Label>
            <div className={'w-3/4'}>
              <FormField
                control={control}
                name="job"
                render={({ field }) => (
                  <Select
                    value={field.value ?? undefined}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a job" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jobs.map((job) => (
                        <SelectItem value={job.value} key={job.value}>
                          {job.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center py-[5px]">
            <Label className="w-1/4 font-medium text-gray-600">
              Prefers Mac
            </Label>
            <FormField
              control={control}
              name="prefersMac"
              render={({ field }) => (
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              )}
            />
          </div>
        </form>
      </Form>
    </>
  );
}

export default ProfileForm;
