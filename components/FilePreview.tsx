'use client';
import Image from 'next/image';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const FilePreview = ({ file, onRemoveFile }: any) => {
    const formatFileSize = ((size: number) => {
        if(size / 1024 / 1024 < 1) return `${Math.floor(size / 1024)} KB`;
        return `${Math.floor(size / 1024 / 1024)} MB`;
    });

    const removeFile = useCallback((fileToRemove: File & { preview: string }) => {
        URL.revokeObjectURL(fileToRemove.preview);
        onRemoveFile && onRemoveFile(fileToRemove);
    }, [onRemoveFile]);

    return <div className='rounded-lg border-solid border-2 border-slate-300 p-4 w-full h-max-px[82px] flex items-center gap-4'>
        <Image className='object-cover box-content' src={file.preview} alt='' width={50} height={50} />
        {/* mask mask-squircle */}
        <div className='flex flex-col justify-center'>
            <p>{file.name}</p>
            <span className='text-xs text-slate-400'>{formatFileSize(file.size)}</span>
        </div>
        <div className='flex-1'></div>
        <button className='btn btn-ghost' onClick={(e) => removeFile(file)}><FontAwesomeIcon className='text-red-500' icon={faTrashCan} /></button>
    </div>
}

export default FilePreview;