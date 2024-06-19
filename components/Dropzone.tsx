'use client';

import { useCallback, useState, FormEvent } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import FilePreview from './FilePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'sonner';

const Dropzone = ({className} : {className?: string }) => {
    const [files, setFiles] = useState<(File & { preview: string })[]>([]);
    const [isSending, setIsSending] = useState<boolean>(false);
    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        if(acceptedFiles?.length) {
            setFiles((previousFiles: any) => [
                ...previousFiles,
                ...acceptedFiles.map((file: File) => Object.assign(file, {preview: URL.createObjectURL(file)}))
            ]);
        }
        // console.log(rejectedFiles);
        rejectedFiles.forEach(rejectedFile => {
            toast.error(rejectedFile.errors[0].message);
        });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.avif', '.webp']
        },
        maxSize: 1024 * 1024 * 2,
        maxFiles: 15,
    });

    const removeFile = (fileToRemove: File & { preview: string }) => {
        setFiles(files.filter(file => file.name !== fileToRemove.name));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!files?.length) return;
        try {
            const data = new FormData();
            Array.from(files).forEach(file => {
              data.append('files', file);
            });
      
            setIsSending(true);
            const res = await fetch('https://spritesheet-maker-api.vercel.app/api/packv3', {
              method: 'POST',
              body: data
            });
      
            if(!res.ok) throw new Error(await res.text());
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'archive.zip');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            toast.success('Spritesheet generated successfully!');
            removeAllFiles();
            setIsSending(false);
          } catch(err: any) {
            toast.success('An error occured');
            setIsSending(false);
          }
    }
    
    const removeAllFiles = () => {
        files.forEach(file => {
            URL.revokeObjectURL(file.preview);
        });
        setFiles([]);
    }

    const submit = () => {
        const form = document.getElementById('form');
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        form?.appendChild(submitButton);
        submitButton.click();
        form?.removeChild(submitButton);
    }

    const buttonContent = () => {
        return (
            <button className='btn btn-primary mt-4 min-w-[150px]' disabled={isSending} onClick={e => submit()}>
                {isSending ? (
                    <span className="loading loading-spinner loading-md"></span>
                ) : (
                    <span>Make Spritesheet</span>
                )}
            </button>
        )
    }

    return (
        <div className='w-full'>
            <form id='form' onSubmit={handleSubmit}>
                <div {...getRootProps({className: `${className} w-full h-full`})}> 
                {/* { className: className } */}
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here</p>
                    ) : (
                        <div className='flex flex-col justify-center gap-4 h-full'>
                            <FontAwesomeIcon className='text-3xl' icon={faCloudArrowUp} />
                            <p>Drag and drop some images here, or click to select images</p>
                        </div>
                    )}
                </div>
            </form>
            {
                files?.length ? (
                    <div className='w-full h-fit max-h-[300px] mt-4 flex flex-col gap-4 overflow-y-scroll'>
                        {files.map(file => (
                            <FilePreview key={file.name} file={file} onRemoveFile={removeFile} />
                        ))}
                    </div>
                ) : (
                    <div></div>
                )
            }
            {
                files?.length > 1 ? (
                    <div className='text-center'>
                        {buttonContent()}
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default Dropzone;
