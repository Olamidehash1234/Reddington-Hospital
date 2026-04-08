import { forwardRef, type ImgHTMLAttributes } from "react";
import {
    buildCloudinarySrcSet,
    buildCloudinaryUrl,
    type CloudinaryImageOptions,
    isCloudinaryUrl,
} from "../utils/cloudinary";

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> &
    CloudinaryImageOptions & {
        src: string;
        sizes?: string;
        priority?: boolean;
        widths?: number[];
    };

const ResponsiveImage = forwardRef<HTMLImageElement, ResponsiveImageProps>(function ResponsiveImage({
    src,
    alt,
    width,
    height,
    sizes,
    priority = false,
    widths,
    crop,
    gravity,
    quality,
    format,
    dpr,
    loading,
    decoding,
    fetchPriority,
    ...rest
}, ref) {
    const optimizedSrc = buildCloudinaryUrl(src, {
        width: typeof width === "number" ? width : undefined,
        height: typeof height === "number" ? height : undefined,
        crop,
        gravity,
        quality,
        format,
        dpr,
    });

    const srcSet = isCloudinaryUrl(src)
        ? buildCloudinarySrcSet(src, {
            width: typeof width === "number" ? width : undefined,
            height: typeof height === "number" ? height : undefined,
            crop,
            gravity,
            quality,
            format,
            dpr,
            widths,
        })
        : undefined;

    return (
        <img
            ref={ref}
            {...rest}
            src={optimizedSrc}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={loading ?? (priority ? "eager" : "lazy")}
            decoding={decoding ?? "async"}
            fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
        />
    );
});

export default ResponsiveImage;
