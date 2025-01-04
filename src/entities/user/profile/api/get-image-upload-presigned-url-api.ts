import { Api } from '@/shared/configs/axios/api';

interface IGetImageUploadPresignedUrlResponse {
  fields: {
    Policy: string;
    'X-Amz_algorithm': string;
    'X-Amz-Credential': string;
    'X-Amz-Date': string;
    'X-Amz-Signature': string;
    bucket: string;
    key: string;
  };
  url: string;
}

export const getImageUploadPresignedUrlApi = async () => {
  const res = await Api.get<IGetImageUploadPresignedUrlResponse>(
    '/users/presigned-url',
  );

  return res.data;
};
