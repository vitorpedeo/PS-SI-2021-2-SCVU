import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { IoCamera } from 'react-icons/io5';

import { Box, Text } from '../Base';

interface ImageInputProps {
  setImage: Dispatch<SetStateAction<File | null>>;
}

export function ImageInput({ setImage }: ImageInputProps) {
  const [preview, setPreview] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const imgSrc = event.target.files ? event.target.files[0] : null;

    if (!imgSrc) {
      setPreview('');
      return;
    }

    const acceptedImageTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    if (!acceptedImageTypes.includes(imgSrc.type)) {
      setPreview('');
      return;
    }

    setImage(imgSrc);

    const imagePreview = URL.createObjectURL(imgSrc);
    setPreview(imagePreview);
  }

  return (
    <Box width="100%">
      <Text as="label" htmlFor="image" fontSize="1rem" fontWeight="bold">
        Imagem
      </Text>
      <Box
        onClick={e => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
        mt="0.5rem"
        width="100%"
        height="310px"
        border="1px solid #d2d2d2"
        borderRadius="4px"
        bg="white"
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <input
          ref={inputRef}
          onChange={handleImageChange}
          id="image"
          name="image"
          type="file"
          style={{ display: 'none' }}
        />
        {preview ? (
          <Image
            src={preview}
            alt="Imagem do Anúncio"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <IoCamera size={128} color="#D2D2D2" />
        )}
      </Box>
    </Box>
  );
}
