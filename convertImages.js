import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/**
 * Конвертирует изображения из указанной директории в форматы WebP и AVIF.
 * @param srcDir - Путь к исходной директории с изображениями.
 * @param destDir - Путь к директории для сохранения преобразованных изображений.
 */
export const convertImages = (srcDir, destDir) => {
    // Считываем файлы из исходной директории
    const files = fs.readdirSync(srcDir);

    // Обрабатываем каждый файл
    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        const filePath = path.join(srcDir, file);
        const destPath = path.join(destDir, `${path.basename(file, ext)}.webp`);

        // Конвертация в формат WebP
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            sharp(filePath)
                .webp({ quality: 75 })
                .toFile(destPath)
                .catch(err => console.error(`Error converting ${file}:`, err));
        }

        // Конвертация в формат AVIF
        const avifDestPath = path.join(
            destDir,
            `${path.basename(file, ext)}.avif`
        );
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            sharp(filePath)
                .avif({ quality: 75 })
                .toFile(avifDestPath)
                .catch(err =>
                    console.error(`Error converting ${file} to AVIF:`, err)
                );
        }
    });
};
