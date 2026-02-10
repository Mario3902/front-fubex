import { useState, useRef } from 'react';
import { Upload, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
    label: string;
    accept?: string;
    required?: boolean;
    onChange?: (file: File | null) => void;
}

const FileUpload = ({ label, accept = 'image/*,.pdf', required = false, onChange }: FileUploadProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (selectedFile: File | null) => {
        if (!selectedFile) {
            setFile(null);
            setPreview(null);
            onChange?.(null);
            return;
        }

        // Validate file size (max 5MB)
        if (selectedFile.size > 5 * 1024 * 1024) {
            alert('O arquivo deve ter no máximo 5MB');
            return;
        }

        setFile(selectedFile);
        onChange?.(selectedFile);

        // Generate preview for images
        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFileChange(droppedFile);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const removeFile = () => {
        handleFileChange(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label} {required && <span className="text-[#c9a227]">*</span>}
            </label>

            {!file ? (
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${isDragging
                        ? 'border-[#1a365d] bg-[#1a365d]/5'
                        : 'border-gray-300 dark:border-gray-600 hover:border-[#1a365d] dark:hover:border-[#c9a227]'
                        }`}
                >
                    <Upload className="w-10 h-10 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Clique para selecionar ou arraste o arquivo aqui
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        PNG, JPG ou PDF (máx. 5MB)
                    </p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept={accept}
                        required={required}
                        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
                    <div className="flex items-start gap-4">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                        ) : (
                            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <FileText className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {file.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {(file.size / 1024).toFixed(1)} KB
                            </p>
                        </div>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={removeFile}
                            className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
