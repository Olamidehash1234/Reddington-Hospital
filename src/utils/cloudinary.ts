type CloudinaryCropMode = "fill" | "fit" | "limit" | "pad" | "scale";

export type CloudinaryImageOptions = {
    width?: number;
    height?: number;
    crop?: CloudinaryCropMode;
    gravity?: string;
    quality?: string | number;
    format?: "auto" | "webp" | "avif" | "jpg" | "png" | "svg";
    dpr?: "auto" | number;
};

const CLOUDINARY_HOST = "res.cloudinary.com";

const DEFAULT_BREAKPOINTS = [320, 480, 640, 768, 960, 1200, 1600];

export function isCloudinaryUrl(src: string): boolean {
    try {
        return new URL(src).hostname.includes(CLOUDINARY_HOST);
    } catch {
        return false;
    }
}

export function buildCloudinaryUrl(src: string, options: CloudinaryImageOptions = {}): string {
    if (!isCloudinaryUrl(src) || !src.includes("/upload/")) {
        return src;
    }

    const {
        width,
        height,
        crop = "fill",
        gravity,
        quality = "auto",
        format = "auto",
        dpr = "auto",
    } = options;

    const transforms = [
        format ? `f_${format}` : "",
        quality ? `q_${quality}` : "",
        dpr ? `dpr_${dpr}` : "",
        crop ? `c_${crop}` : "",
        width ? `w_${Math.round(width)}` : "",
        height ? `h_${Math.round(height)}` : "",
        gravity ? `g_${gravity}` : "",
    ].filter(Boolean);

    const [prefix, uploadAndRest] = src.split("/upload/");

    if (!uploadAndRest) {
        return src;
    }

    const segments = uploadAndRest.split("/");
    const versionIndex = segments.findIndex((segment) => /^v\d+$/.test(segment));
    const assetPath = versionIndex >= 0 ? segments.slice(versionIndex).join("/") : segments.join("/");

    return `${prefix}/upload/${transforms.join(",")}/${assetPath}`;
}

export function buildCloudinarySrcSet(
    src: string,
    {
        widths = DEFAULT_BREAKPOINTS,
        ...options
    }: CloudinaryImageOptions & { widths?: number[] } = {},
): string | undefined {
    if (!isCloudinaryUrl(src)) {
        return undefined;
    }

    const uniqueWidths = [...new Set(widths)]
        .filter((width) => !options.width || width <= options.width * 2)
        .sort((a, b) => a - b);

    return uniqueWidths
        .map((width) => `${buildCloudinaryUrl(src, { ...options, width })} ${width}w`)
        .join(", ");
}
